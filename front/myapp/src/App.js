/* #region imports */
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import { ReactSession } from 'react-client-session';
import { useState } from "react";

import SignUp from "./page/SignUp";
import { AllReservationList } from "./page/allReservationList";
import Login from './page/login';
import { AdminReservation } from './page/admin/reservation/adminReservation';
import { Toast_ } from './components/toast/toast';
import { AdminCoach_profil } from "./page/admin/coach_profil/adminCoach_profil";
import { AdminUser_profil } from "./page/admin/user_profil/adminUser_profil";
import { AdminCondition } from "./page/admin/condition/adminCondition";
import { Bag } from "./page/bag";
import { UserReservation } from "./page/userReservation";
import Profil_user from "./page/profil_user";
import Profil_coach from "./page/profilCoach/profil_coach";
import { User_resaList } from "./page/user_resaList";
import { AdminUser_resaList } from "./page/admin/user_resa_list/adminUser_resaList";
import Navbar from "./components/navbar";
import { Admin_home } from "./page/admin/admin_home";
import Home from "./page/home";
import Admenu from "./components/admin-menu";
import Error404 from "./page/404";
import EBC from "./page/test";
import { ReservationInfo } from "./page/resaInfo";
import { AdminNews } from "./page/admin/news/adminNews";
import { VerifyEmail } from "./page/verifyEmail";

export function App() {
  ReactSession.setStoreType("cookie");
  const [show, setShow] = useState(false);
  const [alerts, setAlerts] = useState();
  const [colors, setColors] = useState();



  return <>
    <Router>

      <Toast_ show={show} setShow={setShow} colors={colors} alerts={alerts} />

      {/* <Navbar setAlerts={setAlerts} setShow={setShow} setColors={setColors} /> */}
      <Switch>

        <Route exact path="/dzd">
          <Admenu/>
        </Route>
        <Route exact path="/ad_home">
          <Admin_home />
        </Route>

        <Route exact path="/admenu">
          <Admenu />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/test">
          <EBC/>
        </Route>
        <Route exact path="/sign_up">
          <SignUp setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/verify_email">
          <VerifyEmail setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/login">
          <Login setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/user_resa_list">
          <User_resaList setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/profil_user">
          <Profil_user setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/profil_coach">
          <Profil_coach setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/all_reservation_list">
          <AllReservationList setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>
        
        <Route exact path="/reservation_info">
          <ReservationInfo setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/user_reservation">
          <UserReservation setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/bag">

          <Bag setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/admin_reservation">
          <AdminReservation setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/admin_news">
          <AdminNews setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/admin_coach_profil">
          <Admenu/>
          <AdminCoach_profil setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/admin_user_profil">
          <Admenu />
          
          <h1 className="user-ad">USER </h1>
          <AdminUser_profil setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
          
        </Route>

        <Route exact path="/admin_condition">
          <AdminCondition setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
        </Route>

        <Route exact path="/admin_user_resa_list">
          <Admenu />

          <h1 className="user-adm"> RESERVATIONS</h1>
          <AdminUser_resaList />
        </Route>
        <Route exact path="/*">
          
          <Error404/>
        </Route>


      </Switch>
    </Router>
  </>
}