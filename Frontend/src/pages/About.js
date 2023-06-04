
import member_1 from "../assets/img/members/member_1.jpg"
import member_2 from "../assets/img/members/member_2.png"
import member_3 from "../assets/img/members/member_3.jpg"
import member_4 from "../assets/img/members/member_4.jpg"
import member_5 from "../assets/img/members/member_5.jpg"
import member_6 from "../assets/img/members/member_6.jpg"
import member_7 from "../assets/img/members/member_7.jpg"
import member_8 from "../assets/img/members/member_8.jpg"
import member_9 from "../assets/img/members/member_9.jpg"
import member_10 from "../assets/img/members/member_10.jpg"
import { useEffect } from "react"

export default function About() {
 
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      }else{
        entry.target.classList.remove('show')
      }
    })
  })
  const hiddenElement = document.querySelectorAll('.hidden');
  hiddenElement.forEach((el) => observer.observe(el))

  })

  
  return (
    <div className="about ">
      <h2>About Us</h2>
      <p>Sinhala and Hindu New Year (Aluth Avurudhu in Sinhala and Puththandu in Tamil ) is a national festival which has been celebrated in Sri Lanka for centuries. The most pronounced areas of the New Year festivities are food, games and the rituals of goodwill. The New Year games can be categorised as indoor and outdoor games.
        Some of the indoor games are Pancha Dameema, Olinda Keliya and Cadju Dameema. The outdoor games are Kotta pora, Onchili pedeema, Raban geseema, Kana mutti bindeema, Placing the eye on an elephant, Bun-eating completion, Kamba adeema (Tug-o-War) and Lissana gaha nageema (climbing the greasy pole) are some of them.
        The significance of the games is that everyone regardless of the age, get themselves involved in the competitions. All the indoor games are played on the floor.When the outdoor games are played the entire neighbourhood get together which enhances the unity and eliminate the misunderstandings of the past. </p>
      <p>This project is building on behalf of CSC2102 Web Programming Course Group Project. According to the given topic, our team members decided to build a fully interactive website using FULL STACK technologies. So, in accordance with the thoughts of everyone in our group we determined to build project using MERN stack because frontend and backend both use JavaScript language.</p>
      <p>Group members are </p>
      <div class="timeline">
  <div class="container left hidden">
  <div class="reg">S/19/841</div>
    <img class="icon" src={member_1} />
    <div class="content">
      <h2>Nanduni Premachandra</h2>
    </div>
  </div>
  <div class="container right hidden">
    <div class="reg">S/19/868</div>
    <img class="icon" src={member_4} />
    <div class="content">
      <h2>Uditha Lakruwan</h2>
    </div>
  </div>
  <div class="container left hidden">
    <div class="reg">S/19/815</div>
    <img class="icon" src={member_9} />
    <div class="content">
      <h2>Nadeeja Thenuka</h2>
    </div>
  </div>
  <div class="container right hidden">
    <div class="reg">S/19/825</div>
    <img class="icon" src={member_5} />
    <div class="content">
      <h2>Dimuthu Ashan</h2>
    </div>
  </div>
  <div class="container left hidden">
    <div class="reg">S/19/SP/871</div>
    <img class="icon" src={member_3} />
    <div class="content">
      <h2>Senadhi Rajarathna</h2>
    </div>
  </div>
  <div class="container right hidden">
    <div class="reg">S/19/821</div>
    <img class="icon" src={member_8} />
    <div class="content">
      <h2>Nikini Kumari</h2>
    </div>
  </div>
  <div class="container left hidden">
    <div class="reg">S/19/818</div>
    <img class="icon" src={member_6} />
    <div class="content">
      <h2>Chathuri Illangarathna</h2>
    </div>
  </div>
  <div class="container right hidden">
    <div class="reg">S/19/867</div>
    <img class="icon" src={member_2} />
    <div class="content">
      <h2>Sameera Lakshan</h2>
    </div>
  </div>
  <div class="container left hidden">
    <div class="reg">S/19/853</div>
    <img class="icon" src={member_7} />
    <div class="content">
      <h2>Steve Thomas</h2>
    </div>
  </div>
<div class="container right hidden">
    <div class="reg">S/19/146</div>
    <img class="icon" src={member_10} />
    <div class="content">
      <h2>Malinga Samarakoon</h2>
    </div>
  </div>
    </div>
    </div>
  )
}
