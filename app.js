$(document).ready(function() {
  var spiritAnimalResults = [
    { spiritAnimal: 'Robyn Sparkles',
      description: 'Hey there superstar! You are fun, bright and beautiful. You have great friends, family and above all else a super mall crew'
    },
    {
      spiritAnimal: 'Monty Python Lumberjack',
      description: 'You are constructive, hardworking and outdoorsy. You also have flair for fashion and people love your infectious can-do attitude!'
    },
    {
      spiritAnimal: 'Anne Shirley',
      description: 'You and a kind and creative. You are prone to having a hot temper, but you know when to reign it in and use your unbridaled creativity to help those you love'
    },
    {  spiritAnimal: 'Dudley Do-Right',
      description: 'You\'re good, some might say too good. You fight for what you love and your nation is indebted to your bravery'
    }
  ],
  inputs = $('.quiz-container').find('label')
  inputs.click(function() {
      selectedInputs = $('.quiz-container').find('input:checked'),
      valueArray = [],
      totalValue = 0,
      totalSelected = selectedInputs.length
      console.log(totalSelected)
    // enable & disabled button by ensuring that all 7 questions have been answered
    if (totalSelected === 6) {
      $('button').prop('disabled', false)
      tallyScore();
    } else {
      $('button').prop('disabled', true)
    }
  })

    function tallyScore() {
      selectedInputs.each(function(){
        valueArray.push($(this).val())
      })

      $.each(valueArray, function(){
        totalValue += parseInt(this)
      })
      // tally the quiz total


    // robyn = 1 // 7 (7 - 11)
    // lumberjack = 2 // 14 (12 - 16)
    // ann Shirley = 3 // 21 (17 - 22)
    // Dudley doright = 4 // 28 (23 - 28)

      if (totalValue <= 11) {
        $('.quiz-container').append(spiritAnimalResults[0].description)
      } else if (totalValue > 11 && totalValue <=16 ) {
        $('.quiz-container').append(spiritAnimalResults[1].description)
      } else if (totalValue > 16 && totalValue <= 22 ) {
        $('.quiz-container').append(spiritAnimalResults[2].description)
      } else {
        $('.quiz-container').append(spiritAnimalResults[3].description)
      }
    }
})
