import left from '../../assets/left.png'
import vector from '../../assets/Vector.png'
import vector2 from '../../assets/Vector2.png'
import './index.css'
function Choose() {
    return(
        <div className="Choose">
        <div className="choose-left">
            <img src={left} alt="left" />
        </div>
        <div className="choose-right">
            <h1>Proven Expertise in Complex IT Solutions</h1>
            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces after value-added infrastructure.</p>
            <div className="stroll">
                <h1>An Award winning company</h1>
                <img src={vector} alt="" />
            </div>
            <div className="about-hr"></div>
            <div className="stroll">
                <h1>An Award winning company</h1>
                <img src={vector2} alt="" />
            </div>
            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver 
            end sound benefits. </p>
            <div className="about-hr"></div>
            <div className="stroll">
                <h1>An Award winning company</h1>
                <img src={vector} alt="" />
            </div>
            <div className="about-hr"></div>
            <div className="stroll">
                <h1>An Award winning company</h1>
                <img src={vector} alt="" />
            </div>
        </div>
        </div>
    )
}
export default Choose;