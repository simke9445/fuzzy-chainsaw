var express = require('express');
var router = express.Router();
var io = require('socket.io');
var ReactDOMServer = require('react-dom/server');
var React = require('react');
var VolunteerList = require('../../dist/component.bundle.js').VolunteerList;
var r = require('rethinkdb');
var localStore = null;
var db = null;

/* GET volunteer listing. */
router.get('/', function(req, res, next) {     
    var cardList = ReactDOMServer.renderToString(VolunteerList({
        cards: localStore.getState().entries
    }));

    res.render('volunteer-list', {
        mainList: cardList,
        state: JSON.stringify(localStore.getState().entries)
    });
});

var signupValidationSchema = {
    'first_name': {
        notEmpty: {
            errorMessage: 'Polje ime je obavezno.'
        }
    },
    'last_name': {
        notEmpty: {
            errorMessage: 'Polje prezime je obavezno.'
        }
    },
    'phone': {
        notEmpty: {
            errorMessage: 'Polje mobilni telefon je obavezno.'
        },
        isPhoneNumber: {
            errorMessage: 'Broj telefona je u losem formatu.'
        }
    },
    'JMBG': {
        isInt: true,
        notEmpty: {
            errorMessage: 'Polje JMBG je obavezno'
        }
    }
};

router.post('/signup', function(req, res, next) {
    console.log(req.body);
    req.checkBody(signupValidationSchema);
    
    var errors = req.validationErrors();
    if (errors === false) {
        var eventId = req.body.event_id;
        delete req.body.event_id;
        console.log(req.body);
        r.table('event')
            .get(eventId)
            .update({
                signups: r.row('signups').append(req.body),
                available_manpower: r.row('signups').count()
            })
            .run(db);
            
        res.redirect('/');
    } else {
        res
            .status(400)
            .send(errors.map(function(err) {
                return err.msg
            })
            .join(','));
    }
});

router.get('/signups/:id', function(req, res, next) {
    r.table('event')
        .get(req.params.id)
        .getField('signups')
        .run(db, function(err, data) {
           res.json(data); 
        });
});

router.post('/profile', function(req, res, next) {
    console.log(req.body);

    res.render('volunteer-detail');
});

module.exports = function(dataStore, databaseRef) {
    localStore = dataStore;
    db = databaseRef;
    
    return router;
}
