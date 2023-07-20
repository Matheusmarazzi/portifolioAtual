
import {AiFillGithub, AiOutlineLinkedin, AiOutlineWhatsApp} from 'react-icons/ai';
import {BiLogoGmail, BiMenu, BiLogoPostgresql, BiLogoReact, BiLogoJavascript} from 'react-icons/bi';
import {LiaNode} from 'react-icons/lia';


import projeto1 from './img/fundo1.png';
import logo from './img/logo.svg';
import me from './img/me.jpeg';
import '../src/style/index.css';

function App() {



  return (
    <div className='container'>
      <header className='header'>
        <img className='logo' src={logo}/>
        <div className='contentsHeader'>
          <a href='#init' className='links'>Inicio</a>
          <a href='#skills' className='links'>Skills</a>
          <a href='#aboutMe' className='links'>Sobre mim</a>
        </div>
      </header>

      <div id='init' className='contents'>
      <img className='me' src={me}/>
        <div className='text'>
            <h3>Oi, me chamo</h3>
            <h1>Matheus de Azevedo Marazzi</h1>
            <h3>Sou Desenvolvedor Web/Mobile.</h3>
            <div className='social'>
              <a target='_blank' href='https://github.com/matheusmarazzi'><AiFillGithub size={40} color='#000' className='icons'/></a>
              <a href='https://www.linkedin.com/in/matheus-marazzi-28489621b' target='_blank'><AiOutlineLinkedin size={40} color='#000' className='icons' /></a>
              <a href='mailto:azevedomarazzi@gmail.com'><BiLogoGmail size={40} color='#000' className='icons' /></a>
            </div>
            

            
        
        </div>
      </div>
      <div   className='projects'>
        <h2>Meus Projetos</h2>
        <div className='itens'>
          <div className='card'>
            <img  className='projetoImg'  src={projeto1}/>
            <p>Projeto Pizzaria</p>
          </div>
          <div className='card'>
            <img className='projetoImg'  src={projeto1}/>
            <p>Projeto Pizzaria</p>
          </div>
          <div className='card'>
            <img className='projetoImg'  src={projeto1}/>
            <p>Projeto Pizzaria</p>
          </div>
          <div className='card'>
            <img className='projetoImg'  src={projeto1}/>
            <p>Projeto Pizzaria</p>
          </div>
          
        </div>
        
        
        
      </div>

      <div id='aboutMe' className='aboutMe'>
          <h1>Sobre mim</h1>
          <div className='info'>
            <p>Sou de Itanhaém-SP.</p>
            <p>Estou cursando Análise e Desenvolvimento de Sistemas na Fatec de Praia Grande.</p>
            <p>Disponível para contratação CLT, Freelancer e Estágio</p>
            <p>Para mais informações entre em contato</p>
            <div className='socialMedia'>
              <a href='https://www.linkedin.com/in/matheus-marazzi-28489621b' target='_blank'><AiOutlineLinkedin size={50} color='#7B68EE' cursor='pointer'  className='socialIcon'/></a>
              <a href='https://wa.me/5513988328510' target='_blank'><AiOutlineWhatsApp size={50} color='#7B68EE' cursor='pointer'  className='socialIcon'/></a>
            </div>
          </div>
      </div>
      <div id='skills' className='tech'>
        <h1>Skills</h1>
        <div className='skill'>
            <p>Desenvolvedor Full Stack com ampla experiência em construção de aplicações web responsivas e dinâmicas</p>
            <p>usando HTML, CSS e JavaScript. Proficiente em frameworks modernos como React e Next.js,</p>
            <p>garantindo interfaces de usuário de alto desempenho. Além disso, possuo habilidades no desenvolvimento de aplicativos</p>
            <p>móveis com React Native e tambem conhecimentos em backend como Node.js e PostgreSQL com Prisma para gerenciamento</p>
            <p>eficiente de bancos de dados.Um profissional versátil e apaixonado por criar soluções tecnológicas inovadoras e escaláveis.</p>
            <div className='socialMedia'>
              <BiLogoJavascript size={50} color='#7B68EE'   className='icon'/>
              <BiLogoReact size={50} color='#7B68EE'   className='icon'/>
              <LiaNode size={50} color='#7B68EE'   className='icon'/>
              <BiLogoPostgresql size={50} color='#7B68EE'   className='icon'/>


              

              
            </div>
          </div>
        
      </div>
 
     <footer>
      <h3>by Matheus Marazzi</h3>
     </footer>

      

    </div>
  );
}

export default App;
