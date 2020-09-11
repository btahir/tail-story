/** @jsx jsx */
import { jsx, ThemeProvider, Layout } from "theme-ui";
import { Global } from "@emotion/core";
import useFirebaseConfig from "../hooks/useFirebaseConfig";
import handleLoginSuccess from "../firebase/auth/handleLoginSuccess";
import handleSignUpSuccess from "../firebase/auth/handleSignUpSuccess";
import handleResetSuccess from "../firebase/auth/handleResetSuccess";
import FormState from "../containers/FormState";
import Form from "../components/Form";
import theme from "../gatsby-plugin-theme-ui";
import { createNewUser } from '../../utils/firebaseActions';
import { auth, useAuth } from "gatsby-theme-firebase";
import { navigate } from "gatsby";
import MyLayout from "../../components/Layout";

const FormWithHandlers = () => {
  const { loginRedirectPath } = useFirebaseConfig();
  const formState = FormState.useContainer();

  return (
    <Form
      onLoginSuccess={user => {
        handleLoginSuccess({ ...formState, user, loginRedirectPath });
        if (user.additionalUserInfo) {
          createNewUser(user.user);
          return
        } else {
          createNewUser(user);
          navigate('/profile');
        }
      }}
      onSignUpSuccess={user => {
        handleSignUpSuccess({ ...formState, user, loginRedirectPath });
        createNewUser(user);
      }}
      onResetSuccess={() => {
        handleResetSuccess({ ...formState, loginRedirectPath });
      }}
    />
  );
};

const LoginPage = () => {
  const { isLoading, isLoggedIn } = useAuth();
  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
          },
        }}
      />
      {isLoggedIn ?
        <MyLayout>
          <div className="mx-auto max-w-md mt-16">
            <button onClick={() => navigate("/")} className="mr-12 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none">
              Go Home
          </button>
            <button 
              onClick={() => {
                auth.signOut();
                navigate('/login')  
              }} 
              className="px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none">
              Sign Out
          </button>
          </div>
        </MyLayout>
        :
        <FormState.Provider>
          <Layout>
            <FormWithHandlers />
          </Layout>
        </FormState.Provider>
      }
    </ThemeProvider>
  );
};

export default LoginPage;
