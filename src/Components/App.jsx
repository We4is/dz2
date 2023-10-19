import '../Style/App.scss'
import logoImg from '../assets/sign.svg'
import cityImg from '../assets/geo.svg'
import man from '../assets/repairman.png'
import square from '../assets/square.png'
import machine from '../assets/machine.png'

function App() {

  return (
    <>
      <header>
        <div className="header_head flex">
          <div className="left_part">
            <div className='left_first flex'>
              <img src={logoImg} alt="" />
              <h2>Fixper</h2>
            </div>
            <div className="center_part flex">
              <a href='#'>Диагностика</a>
              <a href='#'>Стоимость</a>
              <a href='#'>Мастера</a>
              <a href='#'>Отзывы</a>
              <a href='#'>Вопросы</a>
            </div>
          </div>
          <div className="right_part">
            <div className="city_text flex">
              <img src={cityImg} alt="" />
              <h4>Москва</h4>
            </div>
            <button>Позвонить</button>
          </div>
        </div>
        <div className="header_main">
          <div className="image_block">
          <img className='man' src={man} alt="" />
          <img className='square' src={square} alt="" />
          <img className='machine' src={machine} alt="" />
          </div>
          <div className="header_text_block">
            <h1></h1>
            <p></p>
            <button></button>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
