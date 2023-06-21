import { ReactSession } from 'react-client-session';

export function Sign_out () 
{
    ReactSession.set("id", "");
    ReactSession.set("first_name","");
    ReactSession.set("last_name","");
    ReactSession.set("email", "");
    ReactSession.set("password","");
    ReactSession.set("phone_number","");
    ReactSession.set("city","");
    ReactSession.set("postal_code", "");
    ReactSession.set("adress","");
    ReactSession.set("appartment","");
    ReactSession.set("coach","");
    ReactSession.set("admin","");
    ReactSession.set("reservation","");
    ReactSession.set("login", "");
}

