$(document).ready(function() {
  var spiritAnimalResults = [
    { spiritAnimal: 'Robyn Sparkles',
      description: '<h1>Robyn Sparkles</h1><img src="images/robyn.jpg" alt="robyn"> <p>Hey there superstar! You are fun, bright and beautiful. You have great friends, family and above all else a super mall crew! </p>'
    },
    {
      spiritAnimal: 'Monty Python Lumberjack',
      description: '<h1>Monty Python Lumberjack</h1><img src="images/lumberjack.jpg" alt="monty"><p>You are constructive, hardworking and outdoorsy. You also have flair for fashion and people love your infectious can-do attitude! </p>'
    },
    {
      spiritAnimal: 'Anne Shirley',
      description: '<h1>Anne Shirley</h1><img src="images/anne.jpg" alt="anne"><p>You and a kind and creative. You are prone to having a hot temper, but you know when to reign it in and use your unbridaled creativity to help those you love! </p>'
    },
    {  spiritAnimal: 'Dudley Do-Right',
      description: '<h1>Dudley Do-Right</h1><img src="images/dudley.jpg" alt="dudley"><p>You\'re good, some might say too good. You fight for what you love and your nation is indebted to you for your bravery! </p>'
    }
  ],
  inputs = $('.quiz-container').find('label')
  inputs.click(function() {
      selectedInputs = $('.quiz-container').find('input:checked'),
      valueArray = [],
      totalValue = 0,
      totalSelected = selectedInputs.length
    // enable & disabled button by ensuring that all 7 questions have been answered
    if (totalSelected >= 6) {
      $('button').removeClass('disabled').prop('disabled', false)
    } else {
      $('button').prop('disabled', true)
    }
  })

  $('button').one('click', function(event){
    event.preventDefault();
    selectedInputs.each(function(){
      valueArray.push($(this).val())
    })

    $.each(valueArray, function(){
      totalValue += parseInt(this)
    })

  // robyn = 1 // 7 (7 - 11)
  // lumberjack = 2 // 14 (12 - 16)
  // ann Shirley = 3 // 21 (17 - 22)
  // Dudley doright = 4 // 28 (23 - 28)

    if (totalValue <= 11) {
      $('.result').html(spiritAnimalResults[0].description)
    } else if (totalValue > 11 && totalValue <=16 ) {
      $('.result').html(spiritAnimalResults[1].description)
    } else if (totalValue > 16 && totalValue <= 22 ) {
      $('.result').html(spiritAnimalResults[2].description)
    } else {
      $('.result').html(spiritAnimalResults[3].description)
    }
  })
})
