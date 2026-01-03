// Have a herosection with an image and intro text
// Image should be one that can be interpreted as donation image and used to promote donations.
import taabasamumainlogo from '../images/taaabasamu2-removebgv2.png'
import { heroinfo } from "./componentdata/donations";

// introtext should be welcoming, talk about how donations work and encourage readers to make donations
export function HeroDonationSection() {

    return (
        <div className="herodonationcontainer">
            <img src={heroinfo.donations_img} alt='donationsimage' />
            <div className="herodonationstxtcontainer">
                <h1>WHY YOUR DONATION MATTERS</h1>
                <p>{heroinfo.donation_text}</p>
            </div>
        </div>
    )
}

// Have a donation form
// form has Taabasamu logo and header title e.g Make a Donation
// form has checkbox | select | radio | tabs for type of payment e.g Single Time Payment | Monthly Payments
// form has select input for choosing the program to donate to
// form has select input for choosing currency e.g Kshs, USD, EUR
// form has listed checkboxes with predefined amounts
// form has text input for custom amount incase predefined amounts are insufficient
// form has result container showing type of payment, donated program, currency and amount.
// form has submit button as donate which is disabled when inputs are not selected
export function DonationFormSection() {

    return (
        <div className="donationformcontainermain">
            <form>
                <img src={taabasamumainlogo} alt="taabasamulogo" />
                <h2>Donate to Taabasamu</h2>

                {/* Input to select a program to donate to */}
                <fieldset>
                    <legend>Select Program</legend>
                    <select name="" id="">
                        <option value="general">General donation</option>
                        <option value="Mlo">Mlo Project</option>
                        <option value="Tour">Slum Tour</option>
                        <option value="kuza">Kuza Talent Hub</option>
                    </select>
                </fieldset>

                {/* Input for selecting currency */}
                <fieldset>
                    <legend>Currency</legend>
                    <select name="" id="">
                        <option value="kshs">KSHS</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                </fieldset>

                {/* Container for all predifined amounts */}
                <fieldset>
                    <legend>Predefined Amounts</legend>
                    <div className="predefinedamountscontainer">
                        {[1, 2, 3, 5].map((v) => {
                            return (
                                <div className="predefinedamountitem" key={v * 100}>
                                    <span>KSHS</span>
                                    <p>{v * (5 ** 3) + 20}</p>
                                </div>
                            )
                        })}
                    </div>
                </fieldset>

                {/* Divider for user to select btwn custom and predifined */}
                <div className="minialternativedividercontainer">
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>

                {/* Input for entering custom amount */}
                <fieldset>
                    <legend>Custom Amount</legend>
                    <input type="text" placeholder="Enter amount to donate" name="" id="" />
                </fieldset>

                {/* Input for selecting whether donation is recurring */}
                <div className="continouspaymentcontainer">
                    <input type="checkbox" name="" id="" />
                    <span>Mark as recurring donation</span>
                </div>

                {/* Input for email if user is making recurring donation */}
                <fieldset>
                    <legend>Email</legend>
                    <input type="email" name="" id="" />
                </fieldset>

                {/* Result container showing contributed amount */}
                <div className="formresultscontainer">
                    <span>One-time Donation</span>
                    <p>KSHS {Number(3000).toLocaleString()}</p>
                </div>

                {/* Donation submit button */}
                <button>Donate</button>
            </form>
        </div>
    )

}

export function DonationFormSectionV2() {

    return (
        <div className="donationmainsectioncontainer">
            <div className="assistivetxtnformcontainer">
                <div className="assistivemain">
                    <img src={taabasamumainlogo} alt="tabasamulogo" />
                    <h2>WHY WHEN AND HOW WE NEED YOU</h2>
                    <p>{heroinfo.donation_text}</p>
                    <ul>
                        {heroinfo.donationroles.map((role) => <li key={role.split(' ')[0]}>{role}</li>)}
                    </ul>
                    <button>More contribution options</button>
                </div>
                <form className="donationformcontainer">
                    <img src={heroinfo.donations_img} alt="donation" />
                    <div className="forminputscontainer">
                        <h4>Make A Donation</h4>

                        {/* Input to select a program to donate to */}
                        <fieldset>
                            <legend>Select Program</legend>
                            <select name="" id="">
                                <option value="general">General donation</option>
                                <option value="Mlo">Mlo Project</option>
                                <option value="Tour">Slum Tour</option>
                                <option value="kuza">Kuza Talent Hub</option>
                            </select>
                        </fieldset>

                        <div className="currencynamountcontainer">
                            {/* Input for selecting currency */}
                            <fieldset>
                                <legend>Currency</legend>
                                <select name="" id="">
                                    <option value="kshs">KSHS</option>
                                    <option value="usd">USD</option>
                                    <option value="eur">EUR</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <legend>Amount</legend>
                                <input type="text" placeholder="E.g 3000" name="" id="" />
                            </fieldset>
                        </div>

                        {/* Input for selecting whether donation is recurring */}
                        <fieldset>
                            <legend>Donation Type</legend>
                            <select name="" id="">
                                <option value="Onetime">One-time Donation</option>
                                <option value="recurring">Recurring Donation</option>
                            </select>
                        </fieldset>

                        {/* Input for email if user is making recurring donation */}
                        <fieldset>
                            <legend>Email</legend>
                            <input type="email" placeholder='e.g johndoe@mail.com' name="" id="" />
                        </fieldset>

                        {/* Result container showing contributed amount */}
                        <div className="formresultscontainer">
                            <span>One-time Donation</span>
                            <p>KSHS {Number(3000).toLocaleString()}</p>
                        </div>

                        {/* Donation submit button */}
                        <button>Donate</button>
                    </div>
                </form>
            </div>
        </div>
    )
}