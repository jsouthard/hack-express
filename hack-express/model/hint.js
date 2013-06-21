/*
 *   Copyright 2013 Life Cycle Engineering
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

/*
 * Author: Adam Brightwell, Robert Dunigan
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hintSchema = Schema({
	title: {type: String, default: ""},
	description: {type: String, default: ""},
	revealed: {type: Boolean, default: false}
	//title: {type: String, default: ""},
	//description: {type: String, default: ""},
	//revealed: {type: Boolean, default: false}
});

mongoose.model('Hint', hintSchema);

module.exports = function(connection) {
	return (connection || mongoose).model('Hint');
}