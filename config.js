module.exports = {
    rethinkdb: {
    	development: {
	        host: '127.0.0.1',
	        port: 28015,
	        authKey: '',
	        db: 'fuzzy_chainsaw',
    	},
    	production: {
	        host: 'db_1',
	        port: 28015,
	        authKey: '',
	        db: 'fuzzy_chainsaw',	
    	}
    },
    express: {
        port: 3000,
    }
};