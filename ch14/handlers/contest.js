var path = require('path'),
	fs = require('fs'),
	formidable = require('formidable');

// make sure data directory exists
var dataDir = path.normalize(path.join(__dirname, '..', 'data'));
var vacationPhotoDir = path.join(dataDir, 'vacation-photo');
fs.existsSync(dataDir) || fs.mkdirSync(dataDir); 
fs.existsSync(vacationPhotoDir) || fs.mkdirSync(vacationPhotoDir);

exports.vacationPhoto = function(req, res){
	var now = new Date();
	res.render('contest/vacation-photo', { year: now.getFullYear(), month: now.getMonth() });
};

function saveContestEntry(contestName, email, year, month, photoPath){
    // TODO...this will come later
}

exports.vacationPhotoProcessPost = function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return res.redirect(303, '/error');
        if(err) {
            res.session.flash = {
                type: 'danger',
                intro: 'Oops!',
                message: 'There was an error processing your submission. ' +
                    'Pelase try again.',
            };
            return res.redirect(303, '/contest/vacation-photo');
        }
        var photo = files.photo;
        var dir = vacationPhotoDir + '/' + Date.now();
        var path = dir + '/' + photo.name;
        fs.mkdirSync(dir);
        fs.renameSync(photo.path, dir + '/' + photo.name);
        saveContestEntry('vacation-photo', fields.email,
            req.params.year, req.params.month, path);
        req.session.flash = {
            type: 'success',
            intro: 'Good luck!',
            message: 'You have been entered into the contest.',
        };
        return res.redirect(303, '/contest/vacation-photo/entries');
    });
};

exports.vacationPhotoEntries = function(req, res){
	res.render('contest/vacation-photo/entries');
};