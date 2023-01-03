import SwirlArrowRight from 'assets/images/arrows/swirl-arrow-right.svg';

function Divider(props) {
  const { primaryColor, secondaryColor, heightValue } = props;
  return (
    <hr
      style={{
        color: primaryColor,
        backgroundColor: secondaryColor,
        height: heightValue,
        marginRight: '10%'
      }}
    />
  );
}

function NameManagement() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <p>
            <div>
              Name<span style={{color:'orange'}}>#</span>
              <input type="text" id="wname" className="is-invalid"></input>
              <button className="button-orange"> Zeeearch! </button>
              <button className="button-orange bg-secondary"> Register </button>
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </p>

          <p>
            <div>
              <span className="GrislyBeast">Neiman<span style={{color:'orange'}}>#</span></span>
            </div>

            <div>
              <i>Owner</i>: 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
            </div>
          </p>

          <Divider
            primaryColor="orange"
            secondaryColor="orange"
            heightValue={5}
          >
          </Divider>
          <div>
            <button className="button-hashtag">Create <span className="GrislyBeast">Neiman<span style={{color:'orange'}}>#</span>Alice</span>.</button>
          </div>

          <div>
            <form>
               <div className="form-group">
                Choose the link features:

                <div>
                  <input type="checkbox" className="form-check-input" name="friendship"></input>
                  <label className="form-check-label" for="friendship">Friendship</label>
                  <input type="text" className="mx-2" id="wname" placeholder="How long?"></input>
                </div>

                <div>
                  <input type="checkbox" className="form-check-input" name="collaborated"></input>
                  <label className="form-check-label" for="collaborated">Work</label>
                  <input type="text" className="mx-2" id="wname" placeholder="Which organization?"></input>
                </div>

                <div>
                  <input type="checkbox" className="form-check-input" name="community"></input>
                  <label className="form-check-label" for="community">Shared communities</label>
                  <input type="text" className="mx-2" id="wname" placeholder="Which communities?"></input>
                </div>
              </div>
              <button className="button-orange"> Create </button>
            </form>

            <Divider
              primaryColor="orange"
              secondaryColor="orange"
              heightValue={5}
            >
            </Divider>
            <h3> <span className="GrislyBeastH3">Neiman<span style={{color:'orange'}}>#</span></span>'s Links</h3>
            <div>
                <span className="GrislyBeast">Neiman <img src={SwirlArrowRight} className="arrowHeightRed" alt="Swirl Arrow Right" />  Tomlightning</span>
                &nbsp; &nbsp; &nbsp; &nbsp; (<span className="GrislyBeast">Neiman<span style={{color:'orange'}}>#</span>Tomlightning</span>)
            </div>
            <div>
                <span className="GrislyBeast">Neiman <img src={SwirlArrowRight} className="arrowHeightGreen" alt="Swirl Arrow Right" />  Scalo</span>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span className="GrislyBeast">Neiman<span style={{color:'orange'}}>#</span>Scalo</span>)
            </div>
            <div>
                <span className="GrislyBeast">Neiman <img src={SwirlArrowRight} className="arrowHeightBlue" alt="Swirl Arrow Right" />  Wolfram</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span className="GrislyBeast">Neiman<span style={{color:'orange'}}>#</span>Wolfram</span>)
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <h3> Names Registered </h3>
          <div className="names-box" data-augmented-ui="tl-2-round-inset tr-2-round-inset br-2-scoop-inset bl-2-scoop-xy both">
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>,
            Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>, Alice<span style={{color:'orange'}}>#</span>
          </div>
          &nbsp;
          <div>
            <h3> Woolball (All Links) </h3>
          </div>
        </div>

        </div>
      </div>
  )
}

export default NameManagement;
