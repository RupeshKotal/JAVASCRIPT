const Form = document.querySelector('form');
// console.log(Form)

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

Form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results');

    if ( height === ''  || height < 0 || isNaN(height)){

      result.innerHTML = `Entered ${height} height is not valid`
    }

    else if(  weight === ''  || weight < 0 || isNaN(weight) ){

        result.innerHTML = `Entered ${weight} weight is not valid`
    }

    else{
        const bmi = ((weight / (height * height)) * 10000).toFixed(2);
        result.innerHTML= `<span>${bmi}</span>`;

        function add(bodyIndex) {
            if (bodyIndex < 18.6 ){
              const div = document.createElement('div');
              div.innerHTML=`Your Bmi is ${bmi} and you are underweight`
              document.querySelector('form').appendChild(div)
            }

          else if (bodyIndex > 18.6 && bodyIndex < 24.9){
                const div = document.createElement('div');
                div.innerHTML=`Your Bmi is ${bmi} and you are Normal Range`
                document.querySelector('form').appendChild(div) 
              }

              else {
                const div = document.createElement('div');
                div.innerHTML=`Your Bmi is ${bmi} and you are Overweight` 
             document.querySelector('#results').append(div)

              }
        }

        add(bmi)
    }
    
});
