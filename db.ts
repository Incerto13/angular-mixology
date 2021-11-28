
const DATA = [
  {
    id: 0,
    name: "Martini",
    ingredients: [
      {"gin": "5/2-ounces"},
      {"vermouth": "1-teaspoon"},
      {"cocktail olive": "garnish"}
    ],
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour the gin and vermouth over the ice.',
      'Shake until well frosted. Strain into a chilled cocktail glass.',
      'Garnish with the olive.'
    ],
    tags: []
  },
  {
    id: 1,
    name: "Singapore Sling",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"cherry brandy": "1-ounce"},
      {"lemon juice": "3/4-lemon juice"},
      {"grenadine": "1-teaspoon"},
      {"club soda": ""},
      {"lemon peel strips": "garnish"},
      {"maraschino cherries": "garnish"}
    ],
    instructions: [
      'Put cracked ice into a cocktail shaker and pour the gin over it.',
      'Pour in the cherry brandy, lemon juice, and grenadine and shake vigorously until well fronted.',
      'Fill a chilled glass halfway with cracked ice and strain the cocktail over the ice.',
      'Top off with club soda and garnish with the lime peel and cherries.'
    ],
    tags: []
  },
  {
    id: 2,
    name: "Tom Collins",
    ingredients: [
      {"gin": "5/2-ounces"},
      {"lemon juice": "7/4-ounces"},
      {"sugar syrup": "1/2-ounce"},
      {"club soda": ""},
      {"lemon slices": "garnish"}
    ], 
    instructions:[
      'Put cracked ice into a cocktail shaker.',
      'Pour the gin, lemon juirce, and sugar syrup over the ice and shake vigorously until well frosted.',
      'Strain into a chilled Collins glass.',
      'Top off with club soda and garnish with the lemon slices.'
    ],
    tags: []
  },
  {
    id: 3,
    name: "Belle Collins",
    ingredients: [
      {"fresh mint sprigs": "2"},
      {"gin": "7/4-ounces"},
      {"lemon juice": "3/4-ounce"},
      {"sugar syrup": "1-teaspoon"},
      {"crushed ice cubes": "4-6"},
      {"sparkling water": ""},
      {"fresh mint sprigs": "garnish"},
    ],
    instructions: [
      'MISING!!!'
    ],
    tags: []
  },
  {
    id: 4,
    name: "Gin Rickey",
    ingredients: [
      {"cracked ice": ""},
      {"gin": "7/4-ounces"},
      {"lemon juice": "3/4-ounce"},
      {"club soda": ""},
      {"lemon slice": "garnish"}
    ],
    instructions: [
      'Fill a chilled highball glass or goblet with cracked ice.',
      'Pour the gin and lime juice over the ice.',
      'Top off with club soda.',
      'Stirl gently to mix and garnish with a lemon slice.'
    ],
    tags: []
  },
  {
    id: 5,
    name: "A Sloe Kiss",
    ingredients: [
      {"sloe gin": "1/2-ounce"},
      {"Southern Comfort": "1/2-ounce"},
      {"vodka": "3/4-ounce"},
      {"amaretto": "1-teaspoon"},
      {"cracked ice": ""},
      {"galliano": "splash"},
      {"orange juice": ""},
      {"orange peel twish": "garnish"}
    ],
    instructions: [
      'Put cracked ice into a cocktail shaker, pour the sloe gin, Southern Comfort, vodka and ameretto over the ice, and shake until well frosted.',
      'Strain into a long, chilled glass filled with cracked ice.',
      'Splash on the galliano.',
      'Top off with orange uirce and garnish with the orange peel.'
    ],
    tags: []
  },
  {
    id: 6,
    name: "Palm Beach",
    ingredients: [
      {"gin": "3/4-ounce"},
      {"wwhite rum": "3/4-ounce"},
      {"pineapple juice": "3/4-ounce"}
    ],
    instructions: [
      'Shake the gin, rum and pineapple juice vogorously over cracked ice until well frosted.',
      'Strain into a chilled glass.'
    ],
    tags: []
  },
  {
    id: 7,
    name: "Firefly",
    ingredients: [
      {"gin": "3/4-ounce"},
      {"tequila": "1/2-ounce"},
      {"dry orange curaçao": "1/2-ounce"},
      {"lemon juice": "1/2-ounce"},
      {"egg white": "dash"},
      {"orange peel": "garnish"}
    ],
    instructions: [
      'Shake all the liquid ingredients well over ice until frosted.',
      'Strain into a chilled cocktail glass and garnish with a twist of orange peel.'
    ],
    tags: []
  },
  {
    id: 8,
    name: "Gin Sling",
    ingredients: [
      {"hot water": "4-ounces"},
      {"sugar cube": "1"},
      {"gin": "3/4-ounce"},
      {"freshly grated nutmeg": ""},
      {"lemon slice": "1"}
    ],
    instructions: [
      'Place the sugar in an old-fashioned glass and add 4 ounces of hot water. Stir until the sugar is dissolved.',
      'Stir in the gin, sprinkle with nutmeg and serve with a slice of lemon.'
    ],
    tags: []
  },
  {
    id: 9,
    name: "Maidens's Prayer",
    ingredients: [
      {"gin": "3/4-ounce"},
      {"triple sec": "3/4-ounce"},
      {"orange juice": "1-teaspoon"},
      {"lemon juice": "1-teaspoon"},
      {"lemon peel twist": "garnish"}
    ],
    tags: []
  },
  {
    id: 10,
    name: "Daisy",
    ingredients: [
      {"gin": "5/2-ounces"},
      {"lemon juice": "3/4-ounce"},
      {"grenadine": "1/2-ounce"},
      {"sugar syrup": "1-teaspoon"},
      {"club soda": ""},
      {"orange wedge": "garnish"}
    ],
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour the gin , lemon juice, grenadine, and sugar syrup over the ice and shake vigorously until well frosted.',
      'Strain the cocktail into a chilled highball glass.',
      'Top off with club soda, stir gently, and garnish wiht the orange wedge.'
    ],
    tags: []
  },
  {
    id: 11,
    name: "Bloodhound",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"sweet vermouth": "3/4-ounce"},
      {"dry vermouth": "3/4-ounce"},
      {"strawberries": "3"},
      {"cracked ice cubes": "4-6"},
      {"strawberry": "garnish"},
    ],
    instructions: [
      'Put the gin, seet vermouth, dry vermouth, and strawberries into a blender.',
      'Add the cracked ice.',
      'Blend until smooth.',
      'Pour into a chilled cocktail glass and garnish with the remaining strawberry'
    ],
    tags: []
  },
  {
    id: 12,
    name: "Alaska",
    ingredients: [
      {"gin": "1/2-ounce"},
      {"yellow chartreuse": "1/2-ounce"}
    ], 
    instructions: [
      'Shake the gin and chartreuse over ice cubes until well frosted.',
      'Strain into a chilled glass.'
    ],
    tags: []
  },
  {
    id: 13,
    name: "Hawaiian Orange Blossom",
    ingredients: [
      {"gin": "7/3-ounces"},
      {"triple sec": "3/4-ounce"},
      {"orange juice": "7/4-ounces"},
      {"pineapple juice": "3/4-ounce"},
      {"ice": ""},
      {"pineapple slices and leaves": "garnish"}
    ],
    tags: []
  },
  {
    id: 14,
    name: "Wedding Belle",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"dubonnet": "7/4-ounces"},
      {"cherry brandy": "3/4-ounce"},
      {"orange juice": "7/4-ounce"},
      {"orange peel": "garnish"}
    ],
    instructions: [
      'Shake the liquid ingredients over ice cubes until well frosted.',
      'Strain into a chilled glasa and garnish with a twist of orange peel.'
    ],
    tags: []
  },
  {
    id: 15,
    name: "Bride's Mother",
    ingredients: [
      {"sloe gin": "7/4-ounces"},
      {"gin": "3/4-ounce"},
      {"grapefruit juice": "2-ounces"},
      {"sugar syrup": "1/2-ounce"},
      {"crushed ice": ""},
      {"grapefruit slices": "garnish"}
    ],
    instructions: [
      'Shake the liquid ingredients over ice cubes until well frosted.',
      'Strain into a chilled glass and garnish with grapefruit slices'
    ]
  },
  {
    id: 16,
    name: "Moonlight",
    ingredients: [
      {"grapefruit juice": "5/4-ounces"},
      {"gin": "7/2-ounces"},
      {"kirsch": "3/4-ounce"},
      {"white wine": "7/2-ounces"},
      {"lemon zest": "1-teaspoon"}
    ],
    instructions: [
      'Shake all the ingredients vigorously over ice cubes until well frosted. Strain into chilled glass.',
    ],
    tags: []
  },
  {
    id: 17,
    name: "Seventh Heaven",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"maraschino": "1/2-ounce"},
      {"grapefruit juice": "1/2-ounce"},
      {"fresh mint sprigs": "garnish"}
    ],
    instructions: [
      'Shake all the liquid ingredients vigorously over ice cubes until well frosted.',
      'Strain into a chilled cocktail glass. Garnish wiht fresh mint.'
    ],
    tags: []
  },
  {
    id: 18,
    name: "Teardrop",
    ingredients: [
      {"gin": "3/4-ounces"},
      {"apricot nectar or peach nectar": "7/4-ounces"},
      {"light cream": "3/4-ounce"},
      {"crushed ice": ""},
      {"straberry syrup": "1/2-ounce"},
      {"fresh straberry and peach slices": "garnish"}
    ],
    instructions: [
      'Put the gin, apricot nectar, and cream into a blender and blend for 5-10 seconds, until thick and frothy.',
      'Pour into a long glass filled with crushed ice.',
      'Splash the strawberry syrup on the top and garnish with the  strawberry adn peach slices.'
    ],
    tags: []
  },
  {
    id: 19,
    name: "Blue Blooded",
    ingredients: [
      {"gin": "3/4-ounce"}, 
      {"passion fruit nectar": "3/4-ounce"}, 
      {"melon or mango": "4-cubes"}, 
      {"cracked ice cubes": "4-6"},
       {"blue curaçao": "1-teaspoon"}
      ],
      instructions: [
        'Put the gin, passion fruit nectar, melon cubes, and cracked ice into a blender and blend until smooth and frosted.',
        'Pour intto a tall, chilled glass filled with cracked ice and top off with the curaçao.'
      ],
      tags: []
  },
  {
    id: 20,
    name: "Pussycat",
    ingredients: [
      {"cracked ice": ""},
      {"grenadine": "dash"}, 
      {"gin": "7/4-ounces"}, 
      {"pineapple juice": ""}, 
      {"pineapple slice": "garnish"}
    ],
    instructions: [
      'Fill a chilled old-fashioned glass halfway with cracked ice.',
      'Dash the grenadine over the ice and add the gin.',
      'Top off with pineapple juice and garnish with the pineapple slice.'
    ],
    tags: []
  },
  {
    id: 21,
    name: "Bleu Bleu Bleu",
    ingredients: [
      {"crushed ice": ""},
      {"gin": "3/4-ounce"},
      {"vodka": "3/4-ounce"},
      {"tequila": "3/4-ounce"},
      {"fresh lemon juice": "3/4-ounce"},
      {"egg white": "2-dashes"},
      {"blue curaçao": "3/4--ounce"}, 
      {"club soda": ""},
      {"lemon slice": "garnish"}
    ],
    instructions: [
      'Put crushed ice into a cocktail shaker.',
      'Add the gin, vodka, tequila, lemon juice, egg white, and curaçao and shake until frosted.',
      'Strain the cocktail into a tall glass filled with crushed ice and top off with club soda. Garnish with lemon slice.'
    ],
    tags: []
  },
  {
    id: 22,
    name: "Grand Royal Clover Club",
    ingredients: [
      {"gin": "7/4-ounces"}, 
      {"lemon juice": "3/4-ounce"}, 
      {"grenadine": "3/4-ounce"},
      {"egg white": "1"},
      {"lime peel twist": "garnish"}
    ],
    instructions: [
      'Pour the first four ingredients over ice.',
      'Shake vigorously until wel frosted and strain into a chilled cocktail glass.',
      'Garnish with a twist of lime peel.'
    ],
    tags: []
  },
  {
    id: 23,
    name: "The Blue Train",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"triple sec": "3/4-ounce"}, 
      {"lemon juice": "3/4-ounce"},
      {"blue curaçao": "splash"}
    ],
    instructions: [
      'Pour all of the liquid ingredients into a cocktail shaker filled with cracked ice.',
      'Shake vigorously until frosted and strain into a chilled cocktail glass.'
    ],
    tags: []
  },
  {
    id: 24,
    name: "Saketini",
    ingredients: [
      {"gin": "5/2-ounces"},
      {"sake": "1/2-measure"},
      {"lmeon peel twist": "garnish"},
    ],  
    instructions: [
      'Shake the gin and sake vigorously over ice until well frosted.',
      'Strain into a chilled cocktail glass and garnish with a twist of lemon peel.'
    ],
    tags: []
  },
  {
    id: 25,
    name: "Green Lady",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"green chartreuse": "3/4-ounce"},
      {"lime juice": "dash"},
    ],  
    instructions: [
      'Shake the ingredients vigorously over ice until well frosted.',
      'Strain into a chilled cocktail glass and serve immediately'
    ],
    tags: []
  },
  {
    id: 26,
    name: "Bachelor's Bait",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"grenadine": "1-teaspoon"},
      {"egg white": "1"},
      {"orange bitters": "dash"}
    ],  
    instructions: [
      'Shake the gin, grenadine, and egg white together over ice cubes until well frosted.',
      'Add a dash of orange bitters, give the mixture another quick shake, and strain into a chilled cocktail glass.'
    ],
    tags: []
  },
  {
    id: 27,
    name: "Creole Lady",
    ingredients: [
      {"gin": "7/4-ounces"},
      {"madeira or sherry": "5/4-ounces"},
      {"grenadine": "1-teaspoon"},
      {"maraschino cherries": "garnish"}
    ],  
    instructions: [
      'Pour the liquid ingredients over cracked ice in a mixing glass.',
      'Stir well to mix, then strain into a chilled glass.',
      'Garnish with the maraschino cherries.'
    ],
    tags: []
  },
  {
    id: 29,
    name: "Cosmopolitan",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"triple sec": "3/4-ounce"},
      {"lime juice": "3/4-ounce"},
      {"cranberry juice": "3/4-ounce"},
      {"orange peel strip": "garnish"},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour the liquid ingredients over the ice.',
      'Shake vigorously until well frosted.',
      'Strain into a chilled cocktail glass and garnish with the orange peel.'
    ],
    tags: []
  },
  {
    id: 30,
    name: "Woo-woo",
    ingredients: [
      {"crushed ice": ""},
      {"cranberry juice": "7/2-ounces"},
      {"vodka": "7/4-ounces"},
      {"peach schnapps": "7/4"},
    ],  
    instructions: [
      'Fill a chilled cocktail glass halfway with crushed ice.',
      'Pour the cranberry juice over the ice.',
      'Add the vodka and peach schnapps.',
      'Stir well to mix and serve.'
    ],
    tags: []
  },
  {
    id: 31,
    name: "Sex on the Beach",
    ingredients: [
      {"peach schnapps": "3/4-ounce"},
      {"vodka": "3/4-ounce"},
      {"fresh orange juice": "7/4-ounces"},
      {"cranberry or peach juice": "5/2-ounces"},
      {"crushed ice": ""},
      {"lemon juice": "dash"},
      {"orange peel twist": "garnish"},
    ],  
    instructions: [
      'Put cruched ice into a cocktail shaker and pour over the peach schnapps, vodka, orange juice, and cranberry juice.',
      'Shake until well frosted and strain into a glass filled with ice.',
      'Squeeze the lemon juice over the top and garnish with the orange peel.'
    ],
    tags: []
  },
  {
    id: 32,
    name: "Fuzzy Navel",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"peach schnapps": "3/4-ounce"},
      {"orange juice": "1-cup"},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour the liquid incredients over the ice and shake vigorously until well frosted.',
      'Strain into chilled cocktail glasses.'
    ],
    tags: []
  },
  {
    id: 33,
    name: "Salty Dog",
    ingredients: [
      {"granulated sugar": "1-tablespoon"},
      {"kosher salt": "1-tablespoon"},
      {"lime wedge": "1"},
      {"cracked ice": ""},
      {"vodka": "7/4-ounces"},
      {"grapefruit juice": ""},
    ],  
    instructions: [
      'Mix the sugar and sald in a saucer. Rub the rim of the chilled cocktail glass with the lime wedge and diop into the sugar-and-salt mixture to coat.',
      'Fill the flass with cracked ice and poiur the vodka over the ice.',
      'Top off with the grapefruit juice and stir.'
    ],
    tags: []
  },
  {
    id: 34,
    name: "Kamikaze",
    ingredients: [
      {"vodka": "3/4-ounce"},
      {"triple sec": "3/4-ounce"},
      {"fresh lime juice": "1/2-ounce"},
      {"fresh lemon juice": "1/2-ounce"},
      {"dry white wine, chilled": ""},
      {"cucumber and lime slices": "garnish"},
    ],  
    instructions: [],
    tags: []
  },
  {
    id: 35,
    name: "Harvey Wallbanger",
    ingredients: [
      {"cracked ice": ""},
      {"vodka": "5/2-ounces"},
      {"orange juice": "7-ounces"},
      {"galliano": "2-teaspoons"},
      {"maraschino cherry and orange slice": "garnish"},
    ],  
    instructions: [
      'Fill a tall glass halfway with cracked ice.',
      'Pour the vodka and orange juice over the ice.',
      'Float the galliano ontop.',
      'Garnish with the cherry and the orange slice.'
    ],
    tags: []
  },
  {
    id: 36,
    name: "Peartini",
    ingredients: [
      {"superfine sugar": "1-teaspoon"},
      {"ground cinnamon": "pinch"},
      {"lemon wedge": "1"},
      {"vodka": "3/4-ounce"},
      {"pear brandy": "3/4-ounce"},
    ],  
    instructions: [
      'Mix the sugar and cinnamon in a saucer.',
      'Rub the rim of a cocktail glass with the lemon wedge.',
      'Dip into the sugar-and-cinnamon mixture to coat.',
      'Put cracked ice into a cocktail shaker and pour in the vodka and pear brandy. Shake well and strain into the glass.'
    ],
    tags: []
  },
  {
    id: 37,
    name: "Black Beauty",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"black sambuca": "3/4-ounce"},
      {"black ripe olive": "garnish"},
    ],  
    instructions: [
      'Stir the vodka and sambuca with ice in a mixing glass until frosted.',
      'Strain into a chilled cocktail glass and garnish with the olive.'
    ],
    tags: []
  },
  {
    id: 38,
    name: "Spotted Bikini",
    ingredients: [
      {"ripe passion fruit": "1"},
      {"vodka": "7/4-ounces"},
      {"white rum": "3/4-ounce"},
      {"cold milk": "3/4-ounce"},
      {"lemon juice": "5/4-tablespoons"},
      {"lemon peel": "garnish"},
    ],  
    instructions: [
      'Scoop the passion fruit flesh into a bowl. Shake the liquid ingredients over ice until well frosted.',
      'Strain into a chilled cocktail glassa nd add the passino fruit at the last minute.',
      'Garnish with a slice of lemon peel.'
    ],
    tags: []
  },
  {
    id: 39,
    name: "Cordless Screwdriver",
    ingredients: [
      {"orange wedges": ""},
      {"superfine rugar": ""},
      {"vodka, chilled": "7/4-ounces"},
    ],  
    instructions: [
      'Rub the rim of a chilled shot glass with an orange wedge, then dip into a saucer of sugar to frost.',
      'Pour the vodka into the glass.',
      'Dip an orange wedge into the sugar.',
      'Down the vodka in one go and suck the orange.'
    ],
    tags: []
  },
  {
    id: 40,
    name: "Blue Monday",
    ingredients: [
      {"vodka": "3/4-ounce"},
      {"cointreau": "1/2-ounce"},
      {"blue curaçao": "1/2-ounce"},
    ],  
    instructions: [
      'Put cracked ice into a mixing glass or pitcher and pour in the vodka, cointreau, and curaçao.',
      'Stir well, strain into a cocktail glass.'
    ],
    tags: []
  },
  {
    id: 41,
    name: "Bloody Mary",
    ingredients: [
      {"hot pepper sauce": "dash"},
      {"worcestershire sauce": "dash"},
      {"vodka": "7/4-ounces"},
      {"tomato juice": "21/4-ounces"},
      {"lemon juice": "5/4-tablespoons"},
      {"celery salt": "pinch"},
      {"cayenne pepper": "pinch"},
      {"celery stalk and lemon slice": "garnish"},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker. DAsh the hot pepper sauce and worcestershire sauce over it.',
      'Add the vodka, tomato juice, and lemon juice and shake vigorously until well frosted.',
      'Strain into a tall, chilled glass, add the celery salt and cayenne pepper, and garnish with the celery stalk and lemon slice.'
    ],
    tags: []
  },
  {
    id: 42,
    name: "Long Island Iced Tea",
    ingredients: [
      {"vodka": "3/4-ounce"},
      {"gin": "3/4-ounce"},
      {"white tequila": "3/4-ounce"},
      {"white rum": "3/4-ounce"},
      {"white creme de menthe": "1/2-ounce"},
      {"lemon juice": "7/4-ounces"},
      {"superfine sugar": "1 teaspoon"},
      {"cracked ice": ""},
      {"cola": ""},
      {"lime wedge": "garnish"},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker. Pour all the liquid ingredients except the cola over the ice, add the sugar, and shake vigorously until well frosted.',
      'Fill a tall glass with cracked ice and strain over the cocktail.',
      'Top off with cola, garnish with the lime wedge.'
    ],
    tags: []
  },
  {
    id: 43,
    name: "Flying Grasshopper",
    ingredients: [
      {"cracked ice cubes": "4-6"},
      {"vodka": "3/4-ounce"},
      {"green crème de menthe": "3/4-ounce"},
      {"crème de cacao": "3/4-ounce"},
      {"fresh mint": "garnish"},
    ],  
    instructions: [
      'Put the cracked ice into a mixing glass.',
      'Pour the vodka, crème de menthe, and crème de cacao over the ice and stir well.',
      'Strain into a chilled cocktail glass and garnish wiht a sprig of fresh mint.'
    ],
    tags: []
  },
  {
    id: 44,
    name: "Aurora Borealis",
    ingredients: [
      {"chilled grappa or vodka": "3/4-ounce"},
      {"chilled green chartreuse": "3/4-ounce"},
      {"chilled orange curaçao": "1/2-ounce"},
      {"chilled crème de cassis": "few drops"},
    ],  
    instructions: [
      'Pour the grappa slowly over the back of a spoon around one side of a well chillled shot glass.',
      'Gently pour the chartreuse around the other side.',
      'Pour the curaçao gently into the middle.',
      'Add a few drops of crème de cassis.'
    ],
    tags: []
  },
  {
    id: 45,
    name: "Last Mango in Paris",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"framboise": "3/4-ounce"},
      {"lime juice": "3/4-ounce"},
      {"mango, peeled, pitted and chopped": "1/2"},
      {"strawberries": "2"},
      {"lime slice": "garnish"},
    ],  
    instructions: [
      'Mix the ingredients in a blender until slushy.',
      'Pour into a chilled glass and garnish with a slice of lime.'
    ],
    tags: []
  },
  {
    id: 46,
    name: "Thunderbird",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"parfait amour": "dash"},
      {"cassis": "dash"},
      {"orange zes": "small piece"},
      {"rose or violet petal": "garnish"},
    ],  
    instructions: [
      'Pour the vodka into a frosted cocktail glass.',
      'Add the other ingredients slowly and stir only once.'
    ],
    tags: ['specialty cocktail suppliers']
  },
  {
    id: 47,
    name: "Mimi",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"cream of coconut": "1/2-ounce"},
      {"pineapple juice": "7/4-ounces"},
      {"crushed ice cubes": "4-6"},
      {"fresh pineapple slice": "garnish"},
      
    ],  
    instructions: [
      'Put the vodka, cream of coconut, pineapple juice, and crushed ice into a blender.',
      'Blend for a few seconds until frothy.',
      'Pour into a chilled cocktail glass.',
      'Garnish with a slice of pineapple.'
    ],
    tags: []
  },
  {
    id: 48,
    name: "Sunny Bay",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"melon liqueur": "1/2-ounce"},
      {"pineapple juice": "7/4-ounces"},
      {"maraschino cherry": "garnish"},
    ],  
    instructions: [
      'Pour the ingredients into a shaker filled with ice.',
      'Shake well.',
      'Strain into a chilled cocktail glass and garnish with the chery on a toothpick.'
    ],
    tags: []
  },
  {
    id: 49,
    name: "Sea Breeze",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"cranberry juice": "1/2-ounce"},
      {"pink grapefruit juice": ""},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour the vodka and cranberry juice over the ice and shake until frosted.',
      'Strain into a chilled tumpler and top off with pink grapefruit juice.'
    ],
    tags: []
  },
  {
    id: 50,
    name: "Cranberry Collins",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"elderflower syrup (cordial)": "3/4-ounce"},
      {"cranberry juice": "5/2-ounces"},
      {"cracked ice": ""},
      {"club soda": ""},
      {"lime slice and lime peel twist": "garnish"},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour the vodka, elderflower syrup, and cranberry juice over the ice and shake until well frosted.',
      'Strain inot a collins glass filled with cracked ice.',
      'Top off with club soda and garnish with the lime slice and peel.'
    ],
    tags: []
  },
  {
    id: 51,
    name: "Moscow Mule",
    ingredients: [
      {"vodka": "7/4-ounces"},
      {"lime juice": "3/4-ounce"},
      {"cracked ice": ""},
      {"ginger beer": ""},
      {"lime wedge": "garnish"},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour the vodka and lime juice over the ice and shake vigorously until well frosted.',
      'Fill a chilled glass halfway with cracked ice and strain over the cocktail.',
      'Top off with gigner beer and garnish with the lime wedge.'
    ],
    tags: []
  },
  {
    id: 52,
    name: "Screwdriver",
    ingredients: [
      {"cracked ice": ""},
      {"vodka": "7/4-ounces"},
      {"orange juice": ""},
      {"orange slice": "garnish"},
    ],  
    instructions: [
      'Fill a chilled glass with cracked ice. Pour the vodka over the ice.',
      'Top off with ornage juice and stir well to mix.',
      'Garnish with the orange slice.'
    ],
    tags: []
  },
  {
    id: 53,
    name: "Metropolitan",
    ingredients: [
      {"lemon wedge": "1"},
      {"superfine sugar": "1-tablespoon"},
      {"vodka": "1/2-ounce"},
      {"framboise liqueur": "1/2-ounce"},
      {"cranberry juice": "1/2-ounce"},
      {"orange juice": "1/2-ounce"},
    ],  
    instructions: [
      'Rub the rim of a cocktail glass with the lemon wedge.',
      'Dip into the sugar to coat.',
      'Put cracked ice cubes into a cocktail shaker and pour the liquid ingredients over the ice.',
      'Cover the shake vigorously until well frosted. Strain into the glass. '
    ],
    tags: []
  },
  {
    id: 54,
    name: "Vodka Espresso",
    ingredients: [
      {"espresso or other strong black coffee, cooled": "7/4-ounces"},
      {"vodka": "3/4-ounce"},
      {"superfine sugar": "2-teaspoons"},
      {"amarula": "3/4-ounce"},
      {"whole coffee beans": "garnish"},
    ],  
    instructions: [
      'Put cracked ice into a cocktail shaker.',
      'Pour in the coffee and vodka, add sugar, and shake vigorously until well frosted.',
      'Strain into a chilled cocktail glass.',
      'Float the amarula on top and garnish with whole coffee beans.'
    ],
    tags: []
  },
  {
    id: 55,
    name: "",
    ingredients: [
      {"": ""},
      {"": ""},
      {"": ""},
    ],  
    instructions: [],
    tags: []
  },
  {
    id: 56,
    name: "",
    ingredients: [
      {"": ""},
      {"": ""},
      {"": ""},
    ],  
    instructions: [],
    tags: []
  },
  {
    id: 57,
    name: "",
    ingredients: [
      {"": ""},
      {"": ""},
      {"": ""},
    ],  
    instructions: [],
    tags: []
  },
];
