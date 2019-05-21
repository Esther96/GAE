/*
   Copyright 2016, Google, Inc.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

module.exports = {
  projectId: 'helloPCD',
  keyFilename: './key.json',
  bucketName: 'esbucket',
  cookieSecret: '[cookie signing key]',
  oauth2: {
    clientId: '898759177779-4ale2g36qs9hq8hjgdev7gelru222qpp.apps.googleusercontent.com',
    clientSecret: 'WKCrOhX1kEC7DmJ8XvE0XkHY',
    redirectUrl: process.env.REDIRECT_URL || 'https://8080-dot-7126124-dot-devshell.appspot.com/oauth2callback'
  }
};
