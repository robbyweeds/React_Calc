class App extends React.Component {
    constructor(props){
      super(props)
        this.state = {
        answer: '0',
        duplicateDecimal: false,
      }
    }
    render(){
      const setZero = ()=>{
      this.setState({
        answer: '0',
        duplicateDecimal: false});
    
      }
      
      const handleDec = (e)=>{
        if(e.target.value == '.'){
          this.setState({
          answer: this.state.answer + e.target.value,
            duplicateDecimal: true
        });
         
        }
      }
      
      const handleClick = (e)=>{
        if(this.state.answer == '0'){
          this.setState({
          answer: e.target.value,
          
        })
        console.log(e.target.value);
      } else {this.setState({
          answer: this.state.answer + e.target.value,
          
        })
        
        
      }
      }
      
      const handleMinus = (e)=>{
        const texts =  this.state.answer;
        const regex = /(\-\-)$/gm;
        if(this.state.answer == '0'){
          this.setState({
            answer: '-',
            duplicateDecimal: false
          })
          
        } else if(regex.test(texts)){
          this.setState({
               answer: text.slice(0,text.length -1) + e.target.value,
               duplicateDecimal: false})
          
        } else {
          this.setState({
          answer: this.state.answer + e.target.value,
          duplicateDecimal: false
        })
         
        }
        
      }
      
      const handleFunctions = (e)=>{
        const texts =  this.state.answer;
        const regex = /\+$|\*$|\/$/gm;
        const regex1 = /\-$/gm;
        if(regex.test(texts)){
             const text = this.state.answer;
             this.setState({
               answer: text.slice(0,text.length -1) + e.target.value,
               duplicateDecimal: false});
            
           }else if (regex1.test(texts)){
             const text = this.state.answer;
             this.setState({
               answer: text.slice(0,text.length -2) + e.target.value,
               duplicateDecimal: false})
            
           }else{this.setState({
          answer: this.state.answer + e.target.value,
          duplicateDecimal: false
        })
          
           }
           
      }
    
        
      const handleEval = ()=>{
      const text = this.state.answer;
      const result = eval(text);
        this.setState({
          answer: result,
          duplicateDecimal: false
        });
       
            }
      
      
      return (
          <div id='container' className='col-7'>
          <p class='col-12' id='display'>{this.state.answer}</p>
          
          <div className='row padrow'>
            <button id='clear' className='col-9 pad' onClick={setZero}>
              C
            </button>
            
            
            <button className='col-3 pad funcs' id='add' onClick={handleFunctions} value='+'>+
            </button>
          </div>
          <div className='row padrow'>
            <button className='col-3 pad' id='seven' onClick={handleClick} value='7'>
              7
            </button>
            <button className='col-3 pad' id='eight' onClick={handleClick} value='8'>8
            </button>
            <button className='col-3 pad' id='nine' onClick={handleClick} value='9'>9
            </button>
            <button className='col-3 pad funcs' id='subtract' onClick={handleMinus} value='-'>-
            </button>
          </div>
          <div className='row padrow'>
            <button className='col-3 pad' id='four' onClick={handleClick} value='4'>
              4
            </button>
            <button className='col-3 pad' id='five' onClick={handleClick} value='5'>5
            </button>
            <button className='col-3 pad' id='six' onClick={handleClick} value='6'>6
            </button>
            <button className='col-3 pad funcs' id='multiply' onClick={handleFunctions} value='*'>*
            </button>
          </div>
          <div className='row padrow'>
            <button className='col-3 pad' id='one' onClick={handleClick} value='1'>
              1
            </button>
            <button className='col-3 pad' id='two' onClick={handleClick} value='2'>2
            </button>
            <button className='col-3 pad' id='three' onClick={handleClick} value='3'>3
            </button>
            <button className='col-3 pad funcs' id='divide' onClick={handleFunctions} value='/'>/
            </button>
          </div>
          <div className='row padrow'>
            <button className='col-6 pad' id='zero' onClick={handleClick} value='0'>
              0
            </button>
            
            <button className='col-3 pad' id='decimal' onClick={handleDec} value='.' disabled={this.state.duplicateDecimal}>.
            </button>
            <button className='col-3 pad funcs' id='equals' onClick={handleEval}>=
            </button>
          </div>
      </div>
        
      )
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById('root'))
  