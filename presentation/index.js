import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";


import CodeSlide from 'spectacle-code-slide';

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  info_system: require('../assets/inf_syst.jpg'),
  reason_icon: require('../assets/reason_icon.png'),
  mission_icon: require('../assets/mission.png'),
  types: require('../assets/types_of_systems.png'),
  develop: require('../assets/dudes.jpg'),
  mvc: require('../assets/mvc.jpg'),
  codeigniter: require('../assets/cigniter.jpg'),
  welcome_page: require('../assets/welcome_to_ci.png'),
  bootstrap: require('../assets/bootstrap.png'),
  template: require('../assets/template.png'),
  index_view: require('../assets/index_view.png'),
  edit_view: require('../assets/edit_view.png'),
  add_view: require('../assets/add_view.png'),
  mysql: require('../assets/mysql.png'),
};

preloader(images);

const theme = createTheme({
  primary: "#673AB7",
  secondary: "#009688"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ДИПЛОМНА РОБОТА
            </Heading>
            <br />
            <Heading size={1} fit caps textColor="white">
              « АВТОМАТИЗОВАНА ІНФОРМАЦІЙНА СИСТЕМА СЕРВІСНОГО ЦЕНТРУ »
            </Heading>
            
            <br />
            <br />
            <br />
            <br />
            
            <Text size={2} bold textSize="1em" textAlign="left" textColor="#CDDC39">
              Автор: Фенінець В.Ю. <br />
              Група: СКС-12  
            </Text>

          </Slide>


          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Актуальність теми:
            </Heading>
            <br />

            <List>
              <Appear><ListItem>Ефективне управління</ListItem></Appear>
              <Appear><ListItem>Контролювання всіх сторон діяльності</ListItem></Appear>
              <Appear><ListItem>Автоматизування процесу</ListItem></Appear>
              <Appear><ListItem>Реалізування переваги нових технологій і людських ресурсів</ListItem></Appear>
              <Appear><ListItem>Зручний процес моніторингу та контролю</ListItem></Appear>
            </List>
          </Slide>




          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Мета розробки інформаційної системи:
            </Heading>
            <br />

            <List>
              <Appear><ListItem>Зручне керування процесом заповнення заявок</ListItem></Appear>
              <Appear><ListItem>Детальний перегляд стану робіт</ListItem></Appear>
              <Appear><ListItem>Керування персоналом</ListItem></Appear>
              <Appear><ListItem>Зручна база клієнтів</ListItem></Appear>
              <Appear><ListItem>Інформація про стан оплат</ListItem></Appear>
            </List>
          </Slide>



          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.info_system.replace("/", "")} margin="0px auto 100px" height="400px"/>

            <Heading size={2} caps fit textColor="primary" textFont="primary">
             Важливість інформаційних систем ...
            </Heading>

          </Slide>


    
          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Що може дати впровадження інформаційної системи:
            </Heading>
            <br />

            <List>
              <Appear><ListItem>Зниження загальних витрат підприємства в ланцюгу поставок</ListItem></Appear>
              <Appear><ListItem>Підвищення швидкості товарообігу</ListItem></Appear>
              <Appear><ListItem>Скорочення надлишків товарних запасів до мінімуму</ListItem></Appear>
              <Appear><ListItem>Збільшення і ускладнення асортименту продукції</ListItem></Appear>
              <Appear><ListItem>Поліпшення якості продукції</ListItem></Appear>
              <Appear><ListItem>Виконання замовлень у строк і підвищення загальної якості обслуговування замовників.</ListItem></Appear>
            </List>
          </Slide>



          <Slide transition={["slide"]} bgColor="white">

            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Впровадження інформаційних систем
            </Heading>

            <Image src={images.reason_icon.replace("/", "")} 
                    style={{ position: 'absolute', right: -50, bottom: -100 }} height="150px"/>

            <br />


            <Text textAlign="justify" textSize="1em"> 
                Причини, що спонукають організації впроваджувати інформаційні системи, з одного боку обумовлюються прагненням збільшити продуктивність повсякденних робіт чи усунути їх повторне проведення, а з іншого боку бажанням підвищити ефективність управління діяльністю організації за рахунок прийняття оптимальних та раціональних управлінських рішень.
            </Text>
          </Slide>



          <Slide transition={["slide"]} bgColor="white">

            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Задачі інформаційних систем
            </Heading>

            <Image src={images.mission_icon.replace("/", "")} 
                    style={{ position: 'absolute', right: -50, bottom: -100 }} height="150px"/>

            <br />
            

            <Text textAlign="justify" textSize="1em"> 
                Місією інформаційної системи є виробництво потрібної для організації інформації, потрібної для ефективного управління всіма її ресурсами, створення інформаційного та технічного середовища для управління її діяльністю.
            </Text>
          </Slide>




          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.types.replace("/", "")} margin="0px auto 100px" height="318px"/>

            <Heading size={2} fit caps textColor="primary" textFont="primary">
             Типи інформаційних систем
            </Heading>

          </Slide>



    
          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
               Автоматизація інформаційної системи
            </Heading>
            
            <br />
            <br />


            <Text textAlign="justify" textSize="1em" textColor="#E1BEE7"> 
              Це взаємозв’язана сукупність даних, обладнання, програмних засобів, персоналу, стандартних процедур, які призначені для збору, обробки, розподілу, зберігання, представлення інформації згідно з вимогами, які випливають з цілей організації.
              <br /><br />
              Найбільш очевидним засобом підвищення ефективності протікання трудового процесу є його автоматизація.
            </Text>

            <br />

          </Slide>





          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Основними цілями автоматизації діяльності підприємства є:
            </Heading>
            <br />



            <List textSize="1em">

              <Appear><ListItem textSize="1em">Збір, обробка, аналіз, зберігання та представлення даних про діяльність організації та зовнішньому середовищі у вигляді, зручному для прийняття управлінських рішень; </ListItem></Appear>
              <Appear><ListItem textSize="1em">Автоматизація виконання бізнес операцій (технологічних операцій), що становлять цільову діяльність підприємства; </ListItem></Appear>
              <Appear><ListItem textSize="1em">Автоматизація процесів, що забезпечують виконання основної діяльності.</ListItem></Appear>
              <Appear><ListItem textSize="1em">Підвищення продуктивності праці робітників за рахунок вивільнення їх від технічної роботи і розширення творчої діяльності, що сприяє поглибленню досліджень, вирішенню складніших економічних завдань;</ListItem></Appear>

            </List>
          </Slide>




          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps textSize="1.5em">Розробка користувацького інтерфейсу інформаційної системи</Heading>
            <br />
            <Layout>
              <Fill>
                <Heading style={{ padding: 20, height: 110 }} textSize="1em" size={1} caps textColor="secondary" bgColor="white" margin={10}>
                  Головна сторінка зі списком наявних робіт
                </Heading>
              </Fill>
              <Fill>
                <Heading style={{ padding: 20, height: 110 }} textSize="1em" size={1} caps textColor="secondary" bgColor="white" height="120px" margin={10}>
                  Сторінка зі списком персоналу
                </Heading>
              </Fill>
              </Layout>
              <Layout>
              <Fill>
                <Heading style={{ padding: 20, height: 110 }} textSize="1em" size={1} caps textColor="secondary" bgColor="white" height="120px" margin={10}>
                  Сторінка зі списком клієнтів
                </Heading>
              </Fill>
              <Fill>
                <Heading style={{ padding: 20, height: 110 }} textSize="1em" size={1} caps textColor="secondary" bgColor="white" height="120px" margin={10}>
                  Сторінка зі сплаченими рахунками за послуги
                </Heading>
              </Fill>
            </Layout>

              <Layout>
              <Fill>
                <Heading style={{ padding: 20, height: 110 }} textSize="1em" size={1} caps textColor="secondary" bgColor="white" height="120px" margin={10}>
                   Форми додавання та редагування
                </Heading>
              </Fill>
              <Fill>
                <Heading style={{ padding: 20, paddingTop: 35, height: 110 }} textSize="1em" size={1} caps textColor="secondary" bgColor="white" height="120px" margin={10}>
                  Кнопки управління
                </Heading>
              </Fill>
            </Layout>

          </Slide>



    
          <Slide transition={["fade"]} bgColor="#eee" textColor="#212121">

            <Heading textSize="1.3em" caps textColor="primary">
               РОЗРОБКА АВТОМАТИЗОВАНОЇ ІНФОРМАЦІЙНОЇ СИСТЕМИ СЕРВІСНОГО ЦЕНТРУ
            </Heading>
            <br />



            <Text textAlign="left" textSize="1em" textColor="#212121"> 
              Сучасний підхід до розробки програмного забезпечення передбачає використання існуючих рішень та інструментів. Це значно полегшує та прискорює розробку складних систем. Такі рішення називають фреймворками.
              <br /><br />
              При проектуванні архітектури майбутнього додатку, дуже важливо приділити багато часу на аналіз та порівняння фреймворків і інструментів. Адже їх дуже багато і кожен з них має якісь переваги та недоліки. 
            </Text>


            <Image src={images.develop.replace("/", "")} 
                    style={{ position: 'absolute', right: -130, bottom: -110 }} height="150px"/>
            
          </Slide>



    
          <Slide transition={["slide"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Проектування та опис програми
            </Heading>
            <br />

            
          </Slide>


    
          <Slide transition={["fade"]} bgColor="#fff">

            <Heading size={1} textSize="2em" caps textColor="primary">
              MVC
            </Heading>
            <br />

            <Image src={images.mvc.replace("/", "")} margin="20px auto 35px" height="250px"/>

            <Text textAlign="justify" textSize="0.9em" textColor="#212121"> 

              MVC (або Модель-вид-контролер, англ. Model-view-controller) – дуже зручний архітектурний шаблон проектування, який розділяє весь ваш
              додаток на три складові: модель даних, відображення даних та їх керування. Застосовується для того, щоб відділяти дані від інтерфейсу користувача. Таким чином інтерфейс мінімально впливає на наші дані, а зміни в моделі даних відбуваються без втручання інтерфейсу.

            </Text>

            
          </Slide>







          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Back-End. Вимоги до фреймворку
            </Heading>
            <br />



            <List textSize="1em">

              <Appear><ListItem textSize="1.4em">MVC</ListItem></Appear>
              <Appear><ListItem textSize="1.4em">Легковісність</ListItem></Appear>
              <Appear><ListItem textSize="1.4em">Зручна та змістовна документація</ListItem></Appear>
              <Appear><ListItem textSize="1.4em">Широка спільнота</ListItem></Appear>
            </List>
          </Slide>






          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Back-End. Вибір фреймворку — CodeIgniter
            </Heading>
            <br />
            <br />

             <Image src={images.codeigniter.replace("/", "")} margin="20px auto" height="250px"/>

          </Slide>




          <Slide transition={["zoom", "fade"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              CodeIgniter. Підключення бази даних
            </Heading>

            <br />

            <CodePane
              lang="js"
              source={require("raw!../assets/db.example")}
              margin="20px auto"
            />
          </Slide>



        <Slide transition={["zoom", "fade"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              CodeIgniter. Привітальне повідомлення
            </Heading>

            <br />

            <Image src={images.welcome_page.replace("/", "")} margin="20px auto" height="400px"/>
          </Slide>





          <Slide transition={["zoom", "fade"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              Контролер статусу
            </Heading>

            <br />

            <CodePane
              lang="javascript"
              source={require("raw!../assets/success_error.example")}
              margin="20px auto"
            />
          </Slide>



          <Slide transition={["zoom", "fade"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              Функція відображення
            </Heading>

            <br />

            <CodePane
              lang="javascript"
              source={require("raw!../assets/index.example")}
              margin="20px auto"
            />
          </Slide>




          <Slide transition={["slide"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              Функція додавання [ заявки ]
            </Heading>

            <br />

            <CodePane
              lang="javascript"
              source={require("raw!../assets/add.example")}
              margin="20px auto"
            />
          </Slide>




          <Slide transition={["slide"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              Функція додавання [ працівники ]
            </Heading>

            <br />

            <CodePane
              lang="javascript"
              source={require("raw!../assets/add1.example")}
              margin="20px auto"
            />
          </Slide>




          <Slide transition={["slide"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              Функція додавання [ види робіт ]
            </Heading>

            <br />

            <CodePane
              lang="javascript"
              source={require("raw!../assets/add2.example")}
              margin="20px auto"
            />
          </Slide>




          <Slide transition={["slide"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              Функція редагування
            </Heading>

            <br />

            <CodePane
              lang="javascript"
              source={require("raw!../assets/edit.example")}
              margin="20px auto"
            />
          </Slide>



          <Slide transition={["slide"]} bgColor="primary">

            <Heading size={1} caps fit textColor="#ccc">
              Функція видалення
            </Heading>

            <br />

            <CodePane
              lang="javascript"
              source={require("raw!../assets/delete.example")}
              margin="20px auto"
            />
          </Slide>





          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Front-End. Вибір фреймворку — Bootstrap
            </Heading>
            <br />
            <br />

             <Image src={images.bootstrap.replace("/", "")} margin="20px auto" height="400px"/>

          </Slide>



          <Slide transition={["zoom", "slide"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Bootstrap. Основні переваги:
            </Heading>


            <List>

              <ListItem textSize="0.85em">Економія часу - Bootstrap дозволяє заощадити час і зусилля, використовуючи шаблони дизайну і класи, і сконцентруватися на інших розробках;</ListItem>
              <ListItem textSize="0.85em">Висока швидкість - динамічні макети Bootstrap масштабуються на різні пристрої і роздільні здатності екрану без будь-яких змін в розмітці;</ListItem>
              <ListItem textSize="0.85em">Гармонійний дизайн - всі компоненти платформи Bootstrap використовують єдиний стиль і шаблони за допомогою центральної бібліотеки. Дизайн і макети веб-сторінок узгоджуються один з одним;</ListItem>
              <ListItem textSize="0.85em">Простота у використанні - платформа проста у використанні, користувач з базовими знаннями HTML і CSS може почати розробку з Twitter Bootstrap;</ListItem>
              <ListItem textSize="0.85em">Сумісність з браузерами - Twitter Bootstrap сумісний з Mozilla Firefox, Yandex Browser, Google Chrome, Safari, Internet Explorer, Microsoft Edge і Opera;</ListItem>
              <ListItem textSize="0.85em">Відкрите програмне забезпечення - особливість Twitter Bootstrap, яка передбачає зручність використання, за допомогою відкритості вихідних кодів і безкоштовного завантаження.</ListItem>

            </List>

          </Slide>






          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
             Обраний шаблон - Simple Sidebar
            </Heading>
            <br />
            <br />

             <Image src={images.template.replace("/", "")} margin="20px auto" height="400px"/>

          </Slide>










          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Сторінка відображення (заявки)
            </Heading>
            <br />
            <br />

             <Image src={images.index_view.replace("/", "")} margin="20px auto" height="400px"/>

          </Slide>



          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Сторінка додавання (вид робіт)
            </Heading>
            <br />
            <br />

             <Image src={images.add_view.replace("/", "")} margin="20px auto" height="400px"/>

          </Slide>




          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps fit textColor="#ccc">
              Сторінка редагування (клієнти)
            </Heading>
            <br />
            <br />

             <Image src={images.edit_view.replace("/", "")} margin="20px auto" height="400px"/>

          </Slide>





          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps textSize="2.2em" textColor="#ccc">
              Вибір СУБД
            </Heading>
            <br />
            <br />

             <Image src={images.mysql.replace("/", "")} margin="20px auto" height="250px"/>

          </Slide>



          <Slide transition={["fade"]} bgColor="#212121" textColor="#E1BEE7">

            <Heading size={1} caps textSize="1.7em" textColor="#ccc">
              Обґрунтування вибору реляційної бази даних
            </Heading>
            <br />
            <br />

            <Text textColor="#eee" fontSize="1.5em">
                Переваги даної моделі даних:
            </Text>

            <List>
              <ListItem fontSize="1.2em">
                  Більш гнучкі в порівнянні з мережевими і ієрархічними БД
              </ListItem>
              <ListItem fontSize="1.2em">
                  Для пошуку інформації може бути витрачено більше часу, ніж в інших БД
              </ListItem>
            </List>
          </Slide>








          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary"
            notes="Hard to find cities without any pizza"
          >
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Pizza Toppings
            </Heading>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem/>
                    <TableHeaderItem>2011</TableHeaderItem>
                    <TableHeaderItem>2013</TableHeaderItem>
                    <TableHeaderItem>2015</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>None</TableItem>
                    <TableItem>61.8%</TableItem>
                    <TableItem>39.6%</TableItem>
                    <TableItem>35.0%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pineapple</TableItem>
                    <TableItem>28.3%</TableItem>
                    <TableItem>54.5%</TableItem>
                    <TableItem>61.5%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pepperoni</TableItem>
                    <TableItem/>
                    <TableItem>50.2%</TableItem>
                    <TableItem>77.2%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Olives</TableItem>
                    <TableItem/>
                    <TableItem>24.9%</TableItem>
                    <TableItem>55.9%</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
