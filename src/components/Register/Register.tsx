import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import { register, setStatus } from '../../store/userSlice';
import { addToast } from "../toasts/toastsSlice";

const Register: React.FC<any> = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const status = useSelector((state: any) => state.users.status);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [countryFlagUrl, setCountryFlagUrl] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      dispatch(
        addToast({
          status: "warning",
          message: "Register",
        })
      );
    } else {
      const payload = { 
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        email: email,
        address: {
          streetName,
          cityName,
          stateName,
          zipCode,
          countryFlagUrl
        } };
      try {
        dispatch(register(payload));
        navigate('/login');
      } catch (err: any) {
        throw new Error(err);
      }
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ash"
              value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ketchem"
              value={lastName}
							onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
              value={username}
							onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
							onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
							onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Street Address</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="123 Main Street"
              value={streetName}
							onChange={(e) => setStreetName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>City</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Pallet Town"
              value={cityName}
							onChange={(e) => setCityName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>State</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Kentucky"
              value={stateName}
							onChange={(e) => setStateName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Zip Code</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="12345"
              value={zipCode}
							onChange={(e) => setZipCode(Number(e.target.value))}
            />
          </div>
          <div className="form-group mt-3">
          <label>Country</label>
          <br/>
            
            <select id="country" name="country" required
            value={countryFlagUrl}
            onChange={(e) => setCountryFlagUrl(e.target.value)}>
              <option value="https://flagcdn.com/32x24/af.png">Afghanistan</option>
              <option value="https://flagcdn.com/32x24/ax.png">Aland Islands</option>
              <option value="https://flagcdn.com/32x24/al.png">Albania</option>
              <option value="https://flagcdn.com/32x24/dz.png">Algeria</option>
              <option value="https://flagcdn.com/32x24/as.png">American Samoa</option>
              <option value="https://flagcdn.com/32x24/ad.png">Andorra</option>
              <option value="https://flagcdn.com/32x24/ao.png">Angola</option>
              <option value="https://flagcdn.com/32x24/ai.png">Anguilla</option>
              <option value="https://flagcdn.com/32x24/aq.png">Antarctica</option>
              <option value="https://flagcdn.com/32x24/ag.png">Antigua and Barbuda</option>
              <option value="https://flagcdn.com/32x24/ar.png">Argentina</option>
              <option value="https://flagcdn.com/32x24/am.png">Armenia</option>
              <option value="https://flagcdn.com/32x24/aw.png">Aruba</option>
              <option value="https://flagcdn.com/32x24/au.png">Australia</option>
              <option value="https://flagcdn.com/32x24/at.png">Austria</option>
              <option value="https://flagcdn.com/32x24/az.png">Azerbaijan</option>
              <option value="https://flagcdn.com/32x24/bs.png">Bahamas</option>
              <option value="https://flagcdn.com/32x24/bh.png">Bahrain</option>
              <option value="https://flagcdn.com/32x24/bd.png">Bangladesh</option>
              <option value="https://flagcdn.com/32x24/bb.png">Barbados</option>
              <option value="https://flagcdn.com/32x24/by.png">Belarus</option>
              <option value="https://flagcdn.com/32x24/be.png">Belgium</option>
              <option value="https://flagcdn.com/32x24/bz.png">Belize</option>
              <option value="https://flagcdn.com/32x24/bj.png">Benin</option>
              <option value="https://flagcdn.com/32x24/bm.png">Bermuda</option>
              <option value="https://flagcdn.com/32x24/bo.png">Bolivia</option>
              <option value="https://flagcdn.com/32x24/bw.png">Botswana</option>
              <option value="https://flagcdn.com/32x24/bv.png">Bouvet Island</option>
              <option value="https://flagcdn.com/32x24/br.png">Brazil</option>
              <option value="https://flagcdn.com/32x24/bg.png">Bulgaria</option>
              <option value="https://flagcdn.com/32x24/bf.png">Burkina Faso</option>
              <option value="https://flagcdn.com/32x24/bi.png">Burundi</option>
              <option value="https://flagcdn.com/32x24/kh.png">Cambodia</option>
              <option value="https://flagcdn.com/32x24/cm.png">Cameroon</option>
              <option value="https://flagcdn.com/32x24/ca.png">Canada</option>
              <option value="https://flagcdn.com/32x24/cv.png">Cape Verde</option>
              <option value="https://flagcdn.com/32x24/ky.png">Cayman Islands</option>
              <option value="https://flagcdn.com/32x24/td.png">Chad</option>
              <option value="https://flagcdn.com/32x24/cl.png">Chile</option>
              <option value="https://flagcdn.com/32x24/cn.png">China</option>
              <option value="https://flagcdn.com/32x24/co.png">Colombia</option>
              <option value="https://flagcdn.com/32x24/km.png">Comoros</option>
              <option value="https://flagcdn.com/32x24/cg.png">Congo</option>
              <option value="https://flagcdn.com/32x24/ck.png">Cook Islands</option>
              <option value="https://flagcdn.com/32x24/cr.png">Costa Rica</option>
              <option value="https://flagcdn.com/32x24/hr.png">Croatia</option>
              <option value="https://flagcdn.com/32x24/cu.png">Cuba</option>
              <option value="https://flagcdn.com/32x24/cy.png">Cyprus</option>
              <option value="https://flagcdn.com/32x24/cz.png">Czech Republic</option>
              <option value="https://flagcdn.com/32x24/dk.png">Denmark</option>
              <option value="https://flagcdn.com/32x24/do.png">Dominican Republic</option>
              <option value="https://flagcdn.com/32x24/ec.png">Ecuador</option>
              <option value="https://flagcdn.com/32x24/eg.png">Egypt</option>
              <option value="https://flagcdn.com/32x24/sv.png">El Salvador</option>
              <option value="https://flagcdn.com/32x24/ee.png">Estonia</option>
              <option value="https://flagcdn.com/32x24/et.png">Ethiopia</option>
              <option value="https://flagcdn.com/32x24/ft.png">Fiji</option>
              <option value="https://flagcdn.com/32x24/fi.png">Finland</option>
              <option value="https://flagcdn.com/32x24/fr.png">France</option>
              <option value="https://flagcdn.com/32x24/ga.png">Gabon</option>
              <option value="https://flagcdn.com/32x24/gm.png">Gambia</option>
              <option value="https://flagcdn.com/32x24/ge.png">Georgia</option>
              <option value="https://flagcdn.com/32x24/de.png">Germany</option>
              <option value="https://flagcdn.com/32x24/gh.png">Ghana</option>
              <option value="https://flagcdn.com/32x24/gi.png">Gibraltar</option>
              <option value="https://flagcdn.com/32x24/gr.png">Greece</option>
              <option value="https://flagcdn.com/32x24/gl.png">Greenland</option>
              <option value="https://flagcdn.com/32x24/gd.png">Grenada</option>
              <option value="https://flagcdn.com/32x24/gp.png">Guadeloupe</option>
              <option value="https://flagcdn.com/32x24/gu.png">Guam</option>
              <option value="https://flagcdn.com/32x24/gt.png">Guatemala</option>
              <option value="https://flagcdn.com/32x24/gn.png">Guinea</option>
              <option value="https://flagcdn.com/32x24/ht.png">Haiti</option>
              <option value="https://flagcdn.com/32x24/va.png">Vatican City</option>
              <option value="https://flagcdn.com/32x24/hn.png">Honduras</option>
              <option value="https://flagcdn.com/32x24/hk.png">Hong Kong</option>
              <option value="https://flagcdn.com/32x24/hn.png">Hungary</option>
              <option value="https://flagcdn.com/32x24/is.png">Iceland</option>
              <option value="https://flagcdn.com/32x24/in.png">India</option>
              <option value="https://flagcdn.com/32x24/id.png">Indonesia</option>
              <option value="https://flagcdn.com/32x24/ir.png">Iran</option>
              <option value="https://flagcdn.com/32x24/iq.png">Iraq</option>
              <option value="https://flagcdn.com/32x24/ie.png">Ireland</option>
              <option value="https://flagcdn.com/32x24/il.png">Israel</option>
              <option value="https://flagcdn.com/32x24/it.png">Italy</option>
              <option value="https://flagcdn.com/32x24/jm.png">Jamaica</option>
              <option value="https://flagcdn.com/32x24/jp.png">Japan</option>
              <option value="https://flagcdn.com/32x24/je.png">Jersey</option>
              <option value="https://flagcdn.com/32x24/jo.png">Jordan</option>
              <option value="https://flagcdn.com/32x24/kz.png">Kazakhstan</option>
              <option value="https://flagcdn.com/32x24/ke.png">Kenya</option>
              <option value="https://flagcdn.com/32x24/kp.png">South Korea</option>
              <option value="https://flagcdn.com/32x24/xk.png">Kosovo</option>
              <option value="https://flagcdn.com/32x24/kw.png">Kuwait</option>
              <option value="https://flagcdn.com/32x24/kg.png">Kyrgyzstan</option>
              <option value="https://flagcdn.com/32x24/lv.png">Latvia</option>
              <option value="https://flagcdn.com/32x24/lb.png">Lebanon</option>
              <option value="https://flagcdn.com/32x24/ls.png">Lesotho</option>
              <option value="https://flagcdn.com/32x24/lr.png">Liberia</option>
              <option value="https://flagcdn.com/32x24/li.png">Liechtenstein</option>
              <option value="https://flagcdn.com/32x24/lt.png">Lithuania</option>
              <option value="https://flagcdn.com/32x24/lu.png">Luxembourg</option>
              <option value="https://flagcdn.com/32x24/mo.png">Macao</option>
              <option value="https://flagcdn.com/32x24/mg.png">Madagascar</option>
              <option value="https://flagcdn.com/32x24/mw.png">Malawi</option>
              <option value="https://flagcdn.com/32x24/my.png">Malaysia</option>
              <option value="https://flagcdn.com/32x24/mv.png">Maldives</option>
              <option value="https://flagcdn.com/32x24/ml.png">Mali</option>
              <option value="https://flagcdn.com/32x24/yt.png">Mayotte</option>
              <option value="https://flagcdn.com/32x24/mc.png">Mexico</option>
              <option value="https://flagcdn.com/32x24/mc.png">Monaco</option>
              <option value="https://flagcdn.com/32x24/mn.png">Mongolia</option>
              <option value="https://flagcdn.com/32x24/me.png">Montenegro</option>
              <option value="https://flagcdn.com/32x24/ma.png">Morocco</option>
              <option value="https://flagcdn.com/32x24/nr.png">Nauru</option>
              <option value="https://flagcdn.com/32x24/np.png">Nepal</option>
              <option value="https://flagcdn.com/32x24/nl.png">Netherlands</option>
              <option value="https://flagcdn.com/32x24/an.png">Netherlands Antilles</option>
              <option value="https://flagcdn.com/32x24/nc.png">New Caledonia</option>
              <option value="https://flagcdn.com/32x24/nz.png">New Zealand</option>
              <option value="https://flagcdn.com/32x24/ni.png">Nicaragua</option>
              <option value="https://flagcdn.com/32x24/ne.png">Niger</option>
              <option value="https://flagcdn.com/32x24/ng.png">Nigeria</option>
              <option value="https://flagcdn.com/32x24/no.png">Norway</option>
              <option value="https://flagcdn.com/32x24/om.png">Oman</option>
              <option value="https://flagcdn.com/32x24/pk.png">Pakistan</option>
              <option value="https://flagcdn.com/32x24/pa.png">Panama</option>
              <option value="https://flagcdn.com/32x24/py.png">Paraguay</option>
              <option value="https://flagcdn.com/32x24/pe.png">Peru</option>
              <option value="https://flagcdn.com/32x24/ph.png">Philippines</option>
              <option value="https://flagcdn.com/32x24/pn.png">Pitcairn</option>
              <option value="https://flagcdn.com/32x24/pl.png">Poland</option>
              <option value="https://flagcdn.com/32x24/pt.png">Portugal</option>
              <option value="https://flagcdn.com/32x24/pr.png">Puerto Rico</option>
              <option value="https://flagcdn.com/32x24/qa.png">Qatar</option>
              <option value="https://flagcdn.com/32x24/ru.png">Russian Federation</option>
              <option value="https://flagcdn.com/32x24/ws.png">Samoa</option>
              <option value="https://flagcdn.com/32x24/sa.png">Saudi Arabia</option>
              <option value="https://flagcdn.com/32x24/sn.png">Senegal</option>
              <option value="https://flagcdn.com/32x24/rs.png">Serbia</option>
              <option value="https://flagcdn.com/32x24/sk.png">Slovakia</option>
              <option value="https://flagcdn.com/32x24/si.png">Slovenia</option>
              <option value="https://flagcdn.com/32x24/so.png">Somalia</option>
              <option value="https://flagcdn.com/32x24/za.png">South Africa</option>
              <option value="https://flagcdn.com/32x24/es.png">Spain</option>
              <option value="https://flagcdn.com/32x24/lk.png">Sri Lanka</option>
              <option value="https://flagcdn.com/32x24/sd.png">Sudan</option>
              <option value="https://flagcdn.com/32x24/se.png">Sweden</option>
              <option value="https://flagcdn.com/32x24/ch.png">Switzerland</option>
              <option value="https://flagcdn.com/32x24/tw.png">Taiwan</option>
              <option value="https://flagcdn.com/32x24/th.png">Thailand</option>
              <option value="https://flagcdn.com/32x24/tn.png">Tunisia</option>
              <option value="https://flagcdn.com/32x24/tr.png">Turkey</option>
              <option value="https://flagcdn.com/32x24/ug.png">Uganda</option>
              <option value="https://flagcdn.com/32x24/ua.png">Ukraine</option>
              <option value="https://flagcdn.com/32x24/gb.png">United Kingdom</option>
              <option value="https://flagcdn.com/32x24/us.png">United States</option>
              <option value="https://flagcdn.com/32x24/uy.png">Uruguay</option>
              <option value="https://flagcdn.com/32x24/vu.png">Vanuatu</option>
              <option value="https://flagcdn.com/32x24/ve.png">Venezuela</option>
              <option value="https://flagcdn.com/32x24/vn.png">Vietnam</option>
              <option value="https://flagcdn.com/32x24/vg.png">Virgin Islands, British</option>
              <option value="https://flagcdn.com/32x24/vi.png">Virgin Islands, U.s.</option>
              <option value="https://flagcdn.com/32x24/ye.png">Yemen</option>
              <option value="https://flagcdn.com/32x24/zm.png">Zambia</option>
              <option value="https://flagcdn.com/32x24/zw.png">Zimbabwe</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
