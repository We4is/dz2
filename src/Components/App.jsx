import '../Style/App.scss'
import logoImg from '../assets/sign.svg'
import logoImg2 from '../assets/logoImg2.png'
import cityImg from '../assets/geo.svg'
import square from '../assets/square.png'
import square2 from '../assets/square2.svg'
import machine from '../assets/machine.png'
import machine2 from '../assets/machine2.png'
import cross from '../assets/cross.png'
import arrow from '../assets/arrow.png'
import arrow1 from '../assets/arrow1.svg'
import arrowDown from '../assets/arrowDown.png'
import repair from '../assets/repair.svg'
import time from '../assets/time.svg'
import paper from '../assets/paper.svg'
import man from '../assets/man.svg'
import man1 from '../assets/man1.png'
import man2 from '../assets/man2.png'
import markMan from '../assets/markMan.png'
import repairMan from '../assets/repairman.png'
import warn from '../assets/warn.svg'
import blocks from '../assets/blocks.png'
import wait from '../assets/wait.svg'
import comp from '../assets/comp.svg'
import circles from '../assets/circles.svg'
import google from '../assets/google.png'
import yandex from '../assets/yandex.png'
import fixcellent from '../assets/fixcellent.png'
import star from '../assets/star.svg'
import visa from '../assets/visa.png'
import googlePay from '../assets/googlePay.png'
import applePay from '../assets/applePay.png'
import masterCard from '../assets/masterCard.png'
import mir from '../assets/mir.png'
import footerMap from '../assets/footerMap.png'



function App() {

  return (
    <>
      <header>
        <div className="header_head flex">
          <div className="left_part">
            <div className="city_text_mod flex">
              <img src={cityImg} alt="" />
              <h4>Москва</h4>
            </div>
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
          <div className="nav flex">
            <div className='left_first flex'>
              <img src={logoImg} alt="" />
              <h2>Fixper</h2>
            </div>
            <button>Позвонить</button>
          </div>
          <div className="header_main_up flex">
            <div className="image_block">
              <img className='man' src={repairMan} alt="" />
              <img className='square' src={square} alt="" />
              <img className='machine' src={machine} alt="" />
            </div>
            <div className="header_text_block">
              <h1>Ремонт стиральных машин на дому c годовой гарантией</h1>
              <p><span>Отремонтируем на дому </span> или бесплатно завезем и доставим обратно из сервисного центра</p>
              <button>Заказать звонок</button>
            </div>
          </div>
          <div className="header_foot flex">
            <img src={cross} alt="" />
            <div className="center_foot flex">
              <div className='circle'></div>
              <p><span>Мы открыты и принимаем заказы до 21:00</span>, позвоните сейчас и мы сделаем скидку 15%</p>
            </div>
            <div className="right_foot flex">
              <a href="#">Получить скидку <img src={arrow} alt="" /></a>
            </div>
          </div>
        </div>
      </header>
      <div className="header_foot_modal">
        <img src={cross} alt="" />
        <div className="header_foot_mod">
          <div className="center_foot flex">
            <div className='circle'></div>
            <p><span>Мы открыты и принимаем заказы до 21:00</span>,<br /> позвоните сейчас и мы сделаем скидку 15%</p>
          </div>
          <div className="right_foot flex">
            <a href="#">Получить скидку <img src={arrow} alt="" /></a>
          </div>
        </div>
      </div>
      <main>
        <div className="main_header ">
          <div className="main_header-group flex">
            <div className="main_header_block">
              <img src={repair} alt="" />
              <p>Фирменные запчасти у мастеров в наличии</p>
            </div>
            <div className="main_header_block">
              <img src={time} alt="" />
              <p>Большинство ремонтов делаем за час на дому</p>
            </div>
          </div>
          <div className="main_header-group flex">
            <div className="main_header_block">
              <img src={paper} alt="" />
              <p>Профессиональный инструмент под любую задачу</p>
            </div>
            <div className="main_header_block">
              <img src={man} alt="" />
              <p>Квалифицированные и опытные мастера</p>
            </div>
          </div>
        </div>
        <div className="main_main flex">
          <div className="main_main_center">
            <div className="main_left_part">
              <a href='#'>Онлайн-диагностика</a>
              <h1>Какая у вас проблема?</h1>
              <div className="main_blocks">
                <button className='main_button'>Не включается</button>
                <button>Не выключается</button>
                <button>Не нагревает воду</button>
                <button>Все работет, но мне скучно и я хочу пообщаться с мастером</button>
                <button>Не крутится барабан</button>
                <button>Не работает кнопка включения</button>
                <button>Не выключается</button>
                <button>Иная проблема</button>
                <button>Не крутится барабан</button>
                <button>Не крутится барабан</button>
                <button>Не работает кнопка включения</button>
              </div>

              <div className="main_main_text flex">
                <div><img src={warn} alt="" />!</div>
                <h4>Выберите проблему и узнайте её решение</h4>
              </div>
            </div>
          </div>
          <div className="main_right_part">
            <img src={machine2} className='machine2' alt="" />
            <img src={blocks} className='blocks' alt="" />
            <img src={square2} className='square' alt="" />
          </div>
          <div className="button_mod">
            <p>Выберите проблему</p>
            <img src={arrowDown} alt="" />
          </div>
        </div>
        <div className="main_footer">
          <h1>Стоимость работ</h1>
          <div className="price_table">
            <div className="table_level">
              <p>Услуга</p>
              <div className="price">
                <p>Стоимость запчасти</p>
                <p>Стоимость работ</p>
              </div>
            </div>
          </div>
          <div className="price_table">
            <div className="table_level">
              <p>Выезд мастера</p>
              <div className="price">
                <p className='free'>Бесплатно</p>
              </div>
            </div>
          </div>
          <div className="price_table">
            <div className="table_level">
              <p>Диагностика стиральной машины</p>
              <div className="price">
                <p className='free'>Бесплатно</p>
              </div>
            </div>
          </div>
          <div className="price_table">
            <div className="table_level">
              <p>Замена блока питания</p>
              <div className="price">
                <p>от <span>750₽</span></p>
                <p><span>900₽</span></p>
              </div>
            </div>
          </div>
          <div className="price_table">
            <div className="table_level">
              <p>Замена помпы</p>
              <div className="price">
                <p>от <span>8880₽</span></p>
                <p><span>1900₽</span></p>
              </div>
            </div>
          </div>
          <div className="price_table">
            <div className="table_level">
              <p>Замена подшипников</p>
              <div className="price">
                <p>от <span>1450₽</span></p>
                <p><span>750₽</span></p>
              </div>
            </div>
          </div>
          <div className='main_footer_text'>
            <p>Показать все цены</p>
            <img src={wait} alt="" />
          </div>
        </div>
        <div className="big_team">
          <p className='big_team_p'>В нашем штате 37 сотрудников</p>
          <h1>Мы большая команда профессионалов</h1>
          <div className="team_blocks">
            <div className="team_block">
              <img src={man1} alt="" />
              <div className="team_text_block">
                <h2>Александр Федулов</h2>
                <span>Ремонтник</span>
                <p><img src={comp} alt="" /> 398 ремонтных работ</p>
                <p><img src={comp} alt="" /> 3 года в Fixper</p>
                <p><img src={comp} alt="" /> Рейтинг Fixper 4,5</p>
              </div>
            </div>
            <div className="team_block">
              <img src={man2} alt="" />
              <div className="team_text_block">
                <h2>Александр Федулов</h2>
                <span>Ремонтник</span>
                <p><img src={comp} alt="" /> 398 ремонтных работ</p>
                <p><img src={comp} alt="" /> 3 года в Fixper</p>
                <p><img src={comp} alt="" /> Рейтинг Fixper 4,5</p>
              </div>
            </div>
            <div className="team_block" id='man'>
              <img src={man1} alt="" />
              <div className="team_text_block">
                <h2>Александр Федулов</h2>
                <span>Ремонтник</span>
                <p><img src={comp} alt="" /> 398 ремонтных работ</p>
                <p><img src={comp} alt="" /> 3 года в Fixper</p>
                <p><img src={comp} alt="" /> Рейтинг Fixper 4,5</p>
              </div>
            </div>
          </div>
          <div className="big_team_footer flex">
            <div className="big_team_footer_left">
              <img src={circles} alt="" />
            </div>
            <div className="big_team_footer_right">
              <p>Назад</p>
              <span>Далее <img src={arrow1} alt="" /></span>
            </div>
          </div>
        </div>
        <div className="mark">
          <h1>Нас высоко оценивают</h1>
          <div className="mark_blocks">
            <div className="mark_block">
              <div className="mark_block-upper flex">
                <img src={markMan} alt="" />
                <div className="mark_block-upper-info">
                  <h2>Владимир Завертайлов</h2>
                  <p>15 марта 2021</p>
                </div>
              </div>
              <div className="mark_block-down">
                <p>Знаю AXIS, как опытных экспертов в области создания визуализаций любой сложности. Умеют четко, грамотно и по делу формулировать мысли. Исследовать вопросы. Капают — глубоко. В 3D визуализации стремятся не заработать на клиенте, а решить проблемы и предподнести проект в выгодном свете!</p>
              </div>
            </div>
            <div className="mark_block_modal" id='rateMan'>
              <div className="mark_block-upper flex">
                <img src={markMan} alt="" />
                <div className="mark_block-upper-info">
                  <h2>Владимир Завертайлов</h2>
                  <p>15 марта 2021</p>
                </div>
              </div>
              <div className="mark_block-down">
                <p>Хочу выразить свою и признательность в решении ремонта стиральной машины Самсунг A600FN, смогли сделать раньше срока и качественно, спасибо большое. Вы лучшие! Всегда буду обращаться к Вам, ваш клиент.</p>
              </div>
            </div>
          </div>
          <div className="big_team_footer flex">
            <div className="big_team_footer_left">
              <img src={circles} alt="" />
            </div>
            <div className="big_team_footer_right">
              <p>Назад</p>
              <span>Далее <img src={arrow1} alt="" /></span>
            </div>
          </div>
        </div>
        <div className="footer_rate">
          <div className="footer_rate_blocks flex">
            <div className="footer_block flex">
              <div className="rate_left">
                <div className="rate_text flex">
                  <img src={star} alt="" />
                  <h2><span>4,5</span> / 5.0</h2>
                </div>
                <p>100+ оценок</p>
              </div>
              <div className="img_rate">
                <img src={google} alt="" />
              </div>
            </div>
            <div className="footer_block flex">
              <div className="rate_left">
                <div className="rate_text flex">
                  <img src={star} alt="" />
                  <h2><span>4,8 </span> / 5.0</h2>
                </div>
                <p>250+ оценок</p>
              </div>
              <div className="img_rate">
                <img src={yandex} alt="" />
              </div>
            </div>
            <div className="footer_block flex">
              <div className="rate_left">
                <div className="rate_text flex">
                  <img src={star} alt="" />
                  <h2><span>4,3</span> / 5.0</h2>
                </div>
                <p>1000+ оценок</p>
              </div>
              <div className="img_rate">
                <img src={fixcellent} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="questions_left">
            <h1>Часто задаваемые вопросы</h1>
            <p>Не нашли ответ на свой вопрос? <a href="#">Оставьте заявку</a>  и наш специалист свяжется  и ответит на ваш вопрос</p>
          </div>
          <div className="questions_right">
            <div className="question_block flex">
              <p>Где почитать отзывы о вас?</p>
              <div>+</div>
            </div>
            <div className="question_block flex">
              <p>Сколько времени длится ремонт?</p>
              <div>+</div>
            </div>
            <div className="question_block flex">
              <p>Какие марки стиральных машин вы ремонтируете?</p>
              <div>+</div>
            </div>
            <div className="question_block flex">
              <p>Я живу в московской области, сможете приехать?</p>
              <div>+</div>
            </div>
            <div className="question_block flex">
              <p>Как производится контроль качества?</p>
              <div>+</div>
            </div>
          </div>
        </div>

      </main>
      <footer>
        <div className="footer_head">
          <div className="footer_head-block flex">
            <div className="footer_block-text">
              <h1>Вызов мастера</h1>
              <p>Оставьте заявку сейчас и получите <span>скидку 15%</span></p>
            </div>
            <input type="text" placeholder='Номер телефона' />
            <button>Заказать звонок</button>
          </div>
        </div>
        <div className="footer_main">
          <h2>Контактная информация</h2>
          <div className="footer_main-left">
            <img src={footerMap} alt="" />
          </div>
          <div className="footer_main-right">
            <h1>Контактная информация</h1>
            <div className="geo">
              <div className="footer_text-block">
                <h3>ул. Стрелковая, д. 14 (офис 1)</h3>
                <p>8:00—21:00 без выходных</p>
              </div>
              <div className="footer_text-block">
                <h3>ул. Карла Маркса, д. 33 (диспетчерская)</h3>
                <p>7:00—23:00 без выходных</p>
              </div>
            </div>
            <div className="info">
              <h4>iavaisov@gmail.com</h4>
              <button>Позвонить</button>
            </div>

          </div>
        </div>
        <div className="footer_a">
          <h1><img src={logoImg2} alt="" /> Fixper</h1>
          <div className="footer_a-text flex">
            <a href="#">Диагностика</a>
            <a href="#">Стоимость</a>
            <a href="#">Мастера</a>
            <a href="#">Отзывы</a>
            <a href="#">Вопросы</a>
            <a href="#">Карта сайта</a>
          </div>
        </div>
        <div className="type_pay">
          <div className="pay_block flex">
            <h3>Способы оплаты:</h3>
            <div className="pay_image_block flex">
              <img src={mir} alt="" />
              <img src={masterCard} alt="" />
              <img src={visa} alt="" />
              <img src={applePay} alt="" />
              <img src={googlePay} alt="" />
              <p>Наличные</p>
            </div>

          </div>
        </div>
        <div className="footer_footer flex">
          <p>Сервис ремонта бытовой и цифровой техники</p>
          <p>ЧПТУП «МИКАИЛ» 192007601</p>
        </div>
      </footer>
    </>
  )
}

export default App
