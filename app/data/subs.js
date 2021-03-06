angular.module('splatApp').subs = function ($scope) {
  $scope.subs = [
    {
      name: "Splat Bomb",
      localizedName: {
        "ja_JP": "スプラッシュボム",
        "en_US": "Splat Bomb",
        "en_GB": "Splat Bomb",
        "es_ES": "Bomba básica",
        "es_MX": "Plasbomba",
        "fr_FR": "Bombe splash",
        "fr_CA": "Bombe splash",
        "de_DE": "Klecksbombe",
        "zh_HK": "スプラッシュボム (三角形)"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Splash.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Burst Bomb",
      localizedName: {
        "ja_JP": "クイックボム",
        "en_US": "Burst Bomb",
        "en_GB": "Burst Bomb",
        "es_ES": "Bomba rápida",
        "es_MX": "Globo entintado",
        "fr_FR": "Bombe ballon",
        "fr_CA": "Bombe ballon",
        "de_DE": "Insta-Bombe",
        "zh_HK": "クイックボム (水袋)"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Quick.png",
      cost: 40,
      inkSaver: "Low",
      damage: {
        "Direct": 60,
        "Near": 35,
        "Far": 25
      }
    },
    {
      name: "Suction Bomb",
      localizedName: {
        "ja_JP": "キューバンボム",
        "en_US": "Suction Bomb",
        "en_GB": "Suction Bomb",
        "es_ES": "Bomba ventosa",
        "es_MX": "Bomba pegajosa",
        "fr_FR": "Bombe gluante",
        "fr_CA": "Bombe gluante",
        "de_DE": "Haftbombe",
        "zh_HK": "キューバンボム (吸盤)"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Suction.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Autobomb",
      localizedName: {
        "ja_JP": "ロボットボム",
        "en_US": "Autobomb",
        "en_GB": "Autobomb",
        "es_ES": "Robobomba",
        "es_MX": "Robobomba",
        "fr_FR": "Bombe robot",
        "fr_CA": "Bombe robot",
        "de_DE": "Robo-Bombe",
        "zh_HK": "ロボットボム (自走式)"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Robo.png",
      cost: 70,
      inkSaver: "Low",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Curling Bomb",
      localizedName: {
        "ja_JP": "カーリングボム",
        "en_US": "Curling Bomb",
        "en_GB": "Curling Bomb",
        "es_ES": "Bomba deslizante",
        "es_MX": "Bomba deslizante",
        "fr_FR": "Bombe curling",
        "fr_CA": "Bombe curling",
        "de_DE": "Curling-Bombe",
        "zh_HK": "カーリングボム (氷球)"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Curling.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Ink Mine",
      localizedName: {
        "ja_JP": "トラップ",
        "en_US": "Ink Mine",
        "en_GB": "Ink Mine",
        "es_ES": "Bomba Trampa",
        "es_MX": "Mina de tinta",
        "fr_FR": "Mine",
        "fr_CA": "Mine d'encre",
        "de_DE": "Tintenmine",
        "zh_HK": "トラップ (地雷)"
      },
      image: "../common/assets/img/subspe/Wsb_TimerTrap.png",
      cost: 60,
      inkSaver: "Normal",
      damage: {
        "Near": 35,
        "Far": 20
      }
    },
    {
      name: "Squid Beakon",
      localizedName: {
        "ja_JP": "ジャンプビーコン",
        "en_US": "Squid Beakon",
        "en_GB": "Squid Beakon",
        "es_ES": "Baliza transportadora",
        "es_MX": "Baliza",
        "fr_FR": "Balise de saut",
        "fr_CA": "Balise de saut",
        "de_DE": "Sprungboje",
        "zh_HK": "ジャンプビーコン (雷達標志)"
      },
      image: "../common/assets/img/subspe/Wsb_Flag.png",
      cost: 75,
      inkSaver: "Normal"
    },
    {
      name: "Sprinkler",
      localizedName: {
        "ja_JP": "スプリンクラー",
        "en_US": "Sprinkler",
        "en_GB": "Sprinkler",
        "es_ES": "Aspersor",
        "es_MX": "Aspersor",
        "fr_FR": "Fontaine",
        "fr_CA": "Gicleur",
        "de_DE": "Sprinkler",
        "zh_HK": "ジャンプビーコン (淋花器)"
      },
      image: "../common/assets/img/subspe/Wsb_Sprinkler.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Toxic Mist",
      localizedName: {
        "ja_JP": "ポイズンミスト",
        "en_US": "Toxic Mist",
        "en_GB": "Toxic Mist",
        "es_ES": "Nebulizador",
        "es_MX": "Nebulizador",
        "fr_FR": "Brume toxique",
        "fr_CA": "Brume toxique",
        "de_DE": "Sepitox-Nebel",
        "zh_HK": "ポイズンミスト (毒霧)"
      },
      image: "../common/assets/img/subspe/Wsb_PoisonFog.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Point Sensor",
      localizedName: {
        "ja_JP": "ポイントセンサー",
        "en_US": "Point Sensor",
        "en_GB": "Point Sensor",
        "es_ES": "Rastreador",
        "es_MX": "Rastreador",
        "fr_FR": "Détecteur",
        "fr_CA": "Détecteur",
        "de_DE": "Detektor",
        "zh_HK": "ポイントセンサー (追跡器)"
      },
      image: "../common/assets/img/subspe/Wsb_PointSensor.png",
      cost: 60,
      inkSaver: "Normal"
    },
    {
      name: "Splash Wall",
      localizedName: {
        "ja_JP": "スプラッシュシールド",
        "en_US": "Splash Wall",
        "en_GB": "Splash Wall",
        "es_ES": "Telón de Tinta",
        "es_MX": "Barricada",
        "fr_FR": "Mur d'encre",
        "fr_CA": "Mur d'encre",
        "de_DE": "Tintenwall",
        "zh_HK": "スプラッシュシールド (水簾)"
      },
      image: "../common/assets/img/subspe/Wsb_Shield.png",
      cost: 60,
      inkSaver: "Normal"
    }
  ]

  $scope.getSubByName = function(name) {
    return $scope.subs.filter(function(sub) {
      return sub.name == name;
    })[0]
  }

  $scope.getDamagingSubs = function() {
    return $scope.subs.filter(function(sub) {
      return sub.hasOwnProperty("damage")
    })
  }
}
