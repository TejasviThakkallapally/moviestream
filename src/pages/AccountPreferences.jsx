import React from 'react';

function AccountPreferences() {
  return (
    <div id="main-content" className="bg-black min-h-screen flex flex-col items-center justify-center" role ="main">
      <div className="main-block w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <div className="banner h-32 bg-cover flex items-center justify-center text-center" style={{ backgroundImage: "url('banner-image.jpeg')" }}>
          <h1 className="text-black text-3xl">Create a free account</h1>
        </div>
        <span className="text-black-500">* Is Required</span>
        <form action="/" onSubmit={(e) => { e.preventDefault(); validateForm(); }}>
          <fieldset className="mt-4">
            <legend className="text-lg font-semibold">Account Details</legend>
            <div className="account-details flex flex-col space-y-4">
              <div>
                <label className="block text-gray-700" htmlFor="email">Email*</label>
                <input className="indicator border p-2 w-full border-gray-600" id="email" type="email" name="name" required />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="remail">Repeat email*</label>
                <input className="indicator border p-2 w-full border-gray-600" id="remail" type="email" name="name" required />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="password">Password*</label>
                <input className="indicator border p-2 w-full border-gray-600" id="password" type="password" name="name" required />
                {/* <p>It should contain atleast 8-10 Characters</p> */}
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="rpass">Repeat password*</label>
                <input className="indicator border p-2 w-full border-gray-600" id="rpass" type="password" name="name" required />
              </div>
            </div>
          </fieldset>

          <fieldset className="mt-4">
            <legend className="text-lg font-semibold">Personal Details</legend>
            <div className="personal-details flex flex-col space-y-4">
              <div>
                <label className="block text-gray-700" htmlFor="fname">Name*</label>
                <input className="indicator border p-2 w-full border-gray-600" id="fname" type="text" name="name" required />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="number">Phone*</label>
                <input className="indicator border p-2 w-full border-gray-600" id="number" type="tel" maxLength="10" name="name" required />
                <span id="error"></span>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="Street">Street</label>
                <input className="indicator border p-2 w-full border-gray-600" id="Street" type="text" name="name" />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="City">City*</label>
                <input className="indicator border p-2 w-full border-gray-600" id="City" type="text" name="name" required />
              </div>
              <div>
                <label className="block text-gray-700 " htmlFor="Country">Country*</label>
                <select id="Country" className="indicator border p-2 w-full border-gray-600">
                  <option value="India">India</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Russia">Russia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="Website">Website</label>
                <input className="indicator border p-2 w-full border-gray-600" id="Website" type="text" name="name" />
              </div>
            </div>

            <div className="gender mt-4">
              <label className="block text-gray-700">Gender*</label>
              <div>
                <input className="indicator ml-1 border-gray-600" type="radio" id="male" name="gender" value="male" required />
                <label htmlFor="male" className="inline ml-2">Male</label>
                <input className="indicator ml-4 border-gray-600" type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female" className="inline ml-1">Female</label>
              </div>
            </div>

            <div className="nationality mt-4">
              <label className="block text-gray-700" htmlFor="Nationality">Nationality*</label>
              <select required id="Nationality" className="indicator border p-2 w-full border-gray-600">
                <option value="India">India</option>
                <option value="Armenian">Armenian</option>
                <option value="Russian">Russian</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="American">American</option>
                <option value="English">English</option>
              </select>
            </div>

            {/* <div className="children mt-4">
              <label for="child" className="block text-gray-700">Children*</label>
              <input className="indicator" id="child" type="" name="name" required />
            </div> */}

          </fieldset>

          <fieldset className="mt-4">
            <legend className="text-lg font-semibold">Terms and Mailing</legend>
            <div className="terms-mailing mt-2">
              <div className="checkbox">
                <input className="indicator" id="privacy" type="checkbox" name="checkbox" />
                <label htmlFor="privacy" className="ml-2">I accept the <a href="https://www.w3docs.com/privacy-policy" aria-label="Privacy Policy for W3Docs opens in new tab" className="text-blue-900 underline">Privacy Policy for W3Docs</a></label>
              </div>
              <div className="checkbox">
                <input className="indicator" id="privacy1" type="checkbox" name="checkbox" />
                <label htmlFor="privacy1" className="ml-2">I want to receive personalized offers by your site</label>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="btn w-full mt-4 py-2 bg-green-600 text-black font-semibold rounded hover:bg-green-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

// This Validate the Email & Repeat Email value match or not also applies to Password & Repeat Password
function validateForm() {
  const email = document.getElementById("email").value;
  const repeatEmail = document.getElementById("remail").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("rpass").value;

  if (email !== repeatEmail) {
    alert("Emails do not match");
    return false;
  }

  if (password !== repeatPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}

export default AccountPreferences;
