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
 *Authors:  Adam Brightwell, Robert Dunigan
 */

var database = require('../database').connection,
    User = require('../model/user')(database),
    Token = require('../model/token')(database),
    Hint = require('../model/hint')(database),
    ObjectId = require('mongodb').ObjectId;

/**
 * Display the hints page with the users achieved hints.
 */
exports.show = function(req, res) {
  User.findOne({_id: req.session.user._id})
  .populate('hints')
  .exec(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      res.render('Hints', {hints: user.hints});
    }
  });
};

exports.buy = function(req, res){

};
