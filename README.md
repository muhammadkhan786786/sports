# Sport Events
The App is responsible for fetching the popular sport events from the API and displaying it in the listview component. Clicking on any event displays its details. </br>
Please feel free to ask any question about the design and development solution.

## How to run the app in a local environment?
Please follow the procedure below after cloning the project.
* ``` yarn install``` to install project dependencies.
* ``` yarn start ``` to run the JS packager.
* ``` yarn test ``` to run unit and snapshot test cases.
* ```yarn tsc ``` to run typescript for validating app data types.
* ### For running App on iOS emulator:
  * ```yarn pod```
  * ``` yarn ios ```
* ### For running App on Android emulator:
  * ``` yarn android ```
  * The React Native tools require some environment variables to be set up in order to build apps with native code. Make sure  your ANDROID_HOME environment variable is properly configured. Please follow the link for more information: https://reactnative.dev/docs/environment-setup
  * I have noticed that after running the ```yarn android``` script, android emulator doesn't boot up by itself. To resolve this issue, please boot up the emulator from the android studio first and then run ```yarn android ``` script.
  
## Demo
### iOS:
<img src="https://user-images.githubusercontent.com/70640033/118465997-df1aaf00-b71b-11eb-8612-3517689afaba.gif" />

### Android:
<img src="https://user-images.githubusercontent.com/70640033/118466434-49cbea80-b71c-11eb-95ec-0bfa623b0075.gif" />
