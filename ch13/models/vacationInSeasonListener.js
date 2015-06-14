var mongoose = require('mongoose');

var vacationInSeasonListenerSchema = mongoose.Schema({
    email: String,
    skus: [String],
});
var VacationInSeasonListener = mongoose.model('VacationInSeasonListener', vacationInSeasonListenerSchema);

module.exports = VacationInSeasonListener;