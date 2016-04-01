var express = require('express');
var router = express.Router();
var io = require('socket.io');
var ReactDOMServer = require('react-dom/server');
var React = require('react');
var VolunteerList = require('../../dist/component.bundle.js').VolunteerList;
var r = require('rethinkdb');

var localStore = null;
var dbConnection = null;

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

// Twilio Credentials 
var accountSid = 'AC45a26d291a9c58879b8443cd4199e888'; 
var authToken = '1e2fd6e562c797c87defa5864cd5bc4d'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

router.post('/signup', function(req, res, next) {
    req.checkBody(signupValidationSchema);
    
    var errors = req.validationErrors();
    if (errors === false) {
        var eventId = req.body.event_id;
        delete req.body.event_id;

        r.table('event')
            .get(eventId)
            .update({
                signups: r.row('signups').append(req.body),
                available_manpower: r.row('signups').count()
            })
            .run(dbConnection, function(err, cursor) {
                if (err) {
                    return;
                } else { 
                    client.messages.create({ 
                        to: req.body.phone, 
                        from: "+12057329313", 
                        body: "Dragi " + req.body.first_name + " prijavljeni ste za volontiranje.",   
                    }, function(err, message) { 
                        console.log(err); 
                    });
                    
                    console.log(r.row('title'));
                }
            });
            
        res.redirect('/');
    } else {
        res.json(errors.map(function(err) {
            return err.msg
        }));
    }
});

router.get('/signups/:id', function(req, res, next) {
    r.table('event')
        .get(req.params.id)
        .getField('signups')
        .run(dbConnection, function(err, data) {
           res.json(data); 
        });
});

router.post('/profile', function(req, res, next) {
    console.log(req.body);

    res.render('volunteer-detail');
});

router.get('/list', function(req, res) {
    var data = localStore.getState().entries;
    res.json(data);    
});

router.get('/newevent', function(req, res) {
    res.render('coordinator-form'); 
});

var getArray = function(body) {
    var arr = [];
    if (body.power !== undefined) arr.push('Fizicka snaga');
    if (body.swim !== undefined) arr.push('Plivac');
    if (body.nanny !== undefined) arr.push('Staratelj');
    if (body.driver !== undefined) arr.push('Vozac');
    if (body.agile !== undefined) arr.push('Agilan');
    return arr;
}

router.post('/newevent', function(req, res) {
    console.log(req.body);
   
    var newEvent = {
        title: req.body.name,
        note: req.body.description,
        location_name: req.body.location,
        urgency: req.body.urgency,
        required_manpower: req.body.required_manpower,
        available_manpower: 0,
        signups: [],
        general_requirements: getArray(req.body)
    }
    r.table('event').insert(newEvent).run(dbConnection, function() {
        res.redirect('/'); 
    });
});

module.exports = function(dataStore, databaseRef) {
    localStore = dataStore;
    dbConnection = databaseRef;
    
    return router;
}
