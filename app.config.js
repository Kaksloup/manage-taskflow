import 'dotenv/config';

export default {
  expo: {
    name: "manage-taskFlow",
    slug: "manage-taskFlow",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    doctor:{
      reactNativeDirectoryCheck:{
        exclude: ["lucide-react-native", "@lucide/lab"]
      }
    },
    android: {
      package: "com.ynov.managetaskflow"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.ynov.managetaskflow",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false
      }
    },
    web: {
      bundler: "metro",
      output: "single",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
   extra:{
     eas: {
       projectId: "68fef781-dc7f-4bca-84c9-ace68c621b32",
     }
   }
  },
};
