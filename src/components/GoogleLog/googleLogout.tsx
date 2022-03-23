import { GoogleLogout } from "react-google-login";

const clientId =
  "940221773800-2kpn0pebpu339lmg7tgeu675aooj1mln.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        alert(' Logout succ');
    };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout
