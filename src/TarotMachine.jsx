import React, { Component, Fragment } from 'react';
import ReactCardFlip from "react-card-flip";     


class TarotMachine extends Component{
    constructor(){
        super();
        
        this.state = {
            card: {
            number: "Este tarot possui 22 cartas que correspondem aos Arcanos Maiores. As cartas deste baralho foram criadas pelo místico e ocultista inglês Arthur Edward Waite (02.10.1857 – 19.05.1942) e ilustradas por Pamela Colman Smith (16.02.1878 – 18.09.1951). ",
            image: "assets/front-tarot.svg",
            upright:"Possui a energia predominante da carta quando ela está virada para cima",            
            oracle:"Traz concelhos do oráculo para aplicar na vida prática. Nesta sessão você entenderá o caminho que deve seguir",
            reversed:"?",
            name:"",    
            element:"Traz informações a respeito dos 4 elementos de cada carta: água, fogo, terra e ar",
            kabbalitic_letter:"As cartas possuiem uma letra cabalistica",
            meaning_kabbalistic_letter:"As cartas possuem um significado cabalistico para sua respectiva letra", 
            numerology:"As cartas possuem um significado numerico. Nesta sessão você entenderar o que os número da carta podem revelar",          
            planetary_correspondence:"Possuiem um signo ou uma correspondencia planetária",
            animals:"Dispõe de um animal que a representa",
            stone:"Compreende uma pedra que a representa",
            explanation:"Traz consigo a explicação simbólica ou arquétipos dentro do imaginário das cartas"
        
          
           
            },   
            isFlipped: false,  
            hasCard: false
        }
        this.hideCardClick = this.hideCardClick.bind(this);
        this.showCardClick =  this.showCardClick.bind(this);
        this.initCardClick = this.initCardClick.bind(this);
        
    }
    
    
        
    initCardClick(e) {
        
        e.preventDefault(             
            fetch('./tarot.json')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                 let { card } = this.state;                                              
                 card.number = data.cards[22].number;
                 card.image = data.cards[22].image;
                 card.upright = data.cards[22].upright;
                 card.oracle = data.cards[22].oracle;
                 card.number = data.cards[22].number;   
                 card.name = data.cards[22].name;
                 card.element = data.cards[22].element;
                 card.kabbalitic_letter = data.cards[22].kabbalitic_letter;
                 card.meaning_kabbalistic_letter = data.cards[22].meaning_kabbalistic_letter;
                 card.numerology= data.cards[22].numerology;
                 card.planetary_correspondence = data.cards[22].planetary_correspondence;
                 card.animals = data.cards[22].animals;
                 card.stone = data.cards[22].stone;
                 card.explanation = data.cards[22].explanation;
                 this.setState({card}, ()=> {
                    if (this.state.hasCard === false){
                        this.setState({hasCard: true})
                    }
                 })
                
            })
        

        );
      
    }



   

    hideCardClick(e) {
        
        e.preventDefault(         
            fetch('./tarot.json')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                 let { card } = this.state;               
                 card.number = data.cards[23].number;
                 card.image = data.cards[23].image;
                 card.upright = data.cards[23].upright;
                 card.oracle = data.cards[23].oracle;
                 card.name = data.cards[23].name;
                 card.element = data.cards[23].element;
                 card.kabbalitic_letter = data.cards[23].kabbalitic_letter;
                 card.meaning_kabbalistic_letter = data.cards[23].meaning_kabbalistic_letter;
                 card.numerology= data.cards[23].numerology;
                 card.planetary_correspondence = data.cards[23].planetary_correspondence;
                 card.animals = data.cards[23].animals;
                 card.stone = data.cards[23].stone;
                 card.explanation = data.cards[23].explanation;
                 this.setState({card}, ()=> {
                    if (this.state.hasCard === false){
                        this.setState({hasCard: true})
                    }
                 })
                
            })
        

        );
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    
    showCardClick(e) {
        e.preventDefault(          
            fetch('./tarot.json')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                 let { card } = this.state; 
                 let random;        
                 random = Math.floor((Math.random() * 22) + 0);
                 card.number = data.cards[random].number;
                 card.image = data.cards[random].image;
                 card.upright = data.cards[random].upright;
                 card.oracle = data.cards[random].oracle;
                 card.number = data.cards[random]. number;   
                 card.name = data.cards[random].name;
                 card.element = data.cards[random].element;
                 card.kabbalitic_letter = data.cards[random].kabbalitic_letter;
                 card.meaning_kabbalistic_letter = data.cards[random].meaning_kabbalistic_letter;
                 card.numerology= data.cards[random].numerology;
                 card.planetary_correspondence = data.cards[random].planetary_correspondence;
                 card.animals = data.cards[random].animals;
                 card.stone = data.cards[random].stone;
                 card.explanation = data.cards[random].explanation;
                 this.setState({card}, ()=> {
                    if (this.state.hasCard === false){
                        this.setState({hasCard: true})
                    }
                 })
                
            })
        

        );
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }






    renderCard = () => {
        const { 
            number, 
            image, 
            upright, 
            oracle,
            name, 
            element, 
            kabbalitic_letter, 
            meaning_kabbalistic_letter,
            numerology,
            planetary_correspondence,
            animals,
            stone,
            explanation } = this.state.card;
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-5 mb-n5"><br/>  
               
                                        
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                    <div className="navbar-header fixed-top menu-bar ">
                                        <button onClick={this.initCardClick}><i className="fas fa-dungeon "></i><br/>Início</button>   
                                        <button onClick={this.hideCardClick}><i className="fas fa-hand-sparkles"></i><br/>Embaralhar</button>               
                                        <button onClick={this.showCardClick}><i className="fas fa-eye"></i><br/><a className="text-magic-link" href="#revelar">Revelar</a></button>                   
                                        <button href="#magia"><i className="fas fa-hat-wizard"></i><br/><a className="text-magic-link" href="#magia">Magia</a></button>                      
                                    </div>                
                                </div>
                        </nav>               
                        
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                      
                            <div>
                                
                                <img src={image} className="card-img-top mt-3"></img>  
                             
                                            
                            </div>
                            
                    
                            <div>
                                <br/>
                               
                            <img src={image} alt="card" className="card-img-top mt-3"></img>   
                              
                              
                            </div>
                        </ReactCardFlip> 
                       
                         <section id="magia">  
                         <br/>
                         <br/>       
                        <div className='card mt-2'id="//#endregion magia" >     
                                                                                     
                            <ul className="list-group list-group-flush shadow">                               
                                <li className="list-group-item"><h5 className="card-title">{name} {number} </h5></li>   
                                <li className="list-group-item"><span>Energia</span><br/>{upright}</li>   
                                <li className="list-group-item"><span>Oráculo</span><br/><p className="text-justify">{oracle}</p></li>  
                                <li className="list-group-item"><span>Numerologia</span><br/><p className="text-justify">{numerology}</p></li>                                                                                            
                                <li className="list-group-item"><span>Simbolismo</span><br/><p className="text-justify">{explanation}</p></li>            
                                <li className="list-group-item"><span>Elemento</span><br/>{element}</li>
                                <li className="list-group-item"><span>Letra</span><br/>{kabbalitic_letter}</li>                               
                                <li className="list-group-item"><span>Planeta</span><br/>{planetary_correspondence}</li>
                                <li className="list-group-item"><span>Animal</span><br/>{animals}</li>
                                <li className="list-group-item"><span>Pedra</span><br/>{stone}</li>                        
                            </ul>         
                        </div>          
                        <div className="card-body"><a href="https://freecodecamp.org/iurycoelho" className="card-link"><i className="fab fa-free-code-camp fa-2x"></i></a></div>
                        </section>
                    </div>
                    
                </div>
            </div>     
            
            
        )
    }

    render(){
        return(
            <Fragment>                           
                {this.renderCard() }  
                {this.hasCard === true}              
            </Fragment>        
            
        )
    }
}

export default TarotMachine;
