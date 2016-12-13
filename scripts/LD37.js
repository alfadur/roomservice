var LD37 = function (_, Kotlin) {
  'use strict';
  var imported$Enum = Kotlin.kotlin.Enum;
  var imported$Continuation = Kotlin.kotlin.coroutines.Continuation;
  var imported$any = Kotlin.kotlin.collections.any_74vioc$;
  var imported$hashSetOf = Kotlin.kotlin.collections.hashSetOf_9mqe4v$;
  var imported$mapOf = Kotlin.kotlin.collections.mapOf;
  var imported$to = Kotlin.kotlin.to_l1ob02$;
  var imported$mapOf_0 = Kotlin.kotlin.collections.mapOf_eoa9s7$;
  var imported$withIndex = Kotlin.kotlin.collections.withIndex_q5oq31$;
  var imported$rangeTo = Kotlin.kotlin.ranges.rangeTo_n1zt5e$;
  var imported$listOf = Kotlin.kotlin.collections.listOf_9mqe4v$;
  var imported$map = Kotlin.kotlin.collections.map_fcza0h$;
  var imported$forEach = Kotlin.kotlin.collections.forEach_lcecrh$;
  var imported$minBy = Kotlin.kotlin.collections.minBy_l82ugp$;
  var imported$isNotEmpty = Kotlin.kotlin.collections.isNotEmpty_mwto7b$;
  var imported$first = Kotlin.kotlin.collections.first_a7ptmv$;
  var imported$take = Kotlin.kotlin.collections.take_cwv5p1$;
  var imported$joinToString = Kotlin.kotlin.collections.joinToString_ld60a2$;
  var imported$mapNotNull = Kotlin.kotlin.collections.mapNotNull_fcza0h$;
  var imported$arrayListOf = Kotlin.kotlin.collections.arrayListOf_9mqe4v$;
  var imported$first_0 = Kotlin.kotlin.collections.first_udlcbx$;
  var imported$ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_wtfk93$;
  var imported$IntRange = Kotlin.kotlin.ranges.IntRange;
  var imported$indexOf = Kotlin.kotlin.collections.indexOf_ke19y6$;
  var imported$drop = Kotlin.kotlin.collections.drop_cwv5p1$;
  var imported$get_indices = Kotlin.kotlin.collections.get_indices_mwto7b$;
  var imported$firstOrNull = Kotlin.kotlin.collections.firstOrNull_udlcbx$;
  var imported$Pair = Kotlin.kotlin.Pair;
  var imported$ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_za3lpa$;
  var imported$any_0 = Kotlin.kotlin.collections.any_udlcbx$;
  var imported$plus = Kotlin.kotlin.collections.plus_ukps2u$;
  var imported$listOf_0 = Kotlin.kotlin.collections.listOf;
  ControllerAction.prototype = Object.create(imported$Enum.prototype);
  ControllerAction.prototype.constructor = ControllerAction;
  KeyboardController.prototype = Object.create(KeyboardControllerBase.prototype);
  KeyboardController.prototype.constructor = KeyboardController;
  MenuKeyboardController.prototype = Object.create(KeyboardControllerBase.prototype);
  MenuKeyboardController.prototype.constructor = MenuKeyboardController;
  MainMenuStage.prototype = Object.create(MenuStage.prototype);
  MainMenuStage.prototype.constructor = MainMenuStage;
  FeedbackStage.prototype = Object.create(MenuStage.prototype);
  FeedbackStage.prototype.constructor = FeedbackStage;
  PauseStage.prototype = Object.create(MenuStage.prototype);
  PauseStage.prototype.constructor = PauseStage;
  Direction.prototype = Object.create(imported$Enum.prototype);
  Direction.prototype.constructor = Direction;
  Task$Wait.prototype = Object.create(Task.prototype);
  Task$Wait.prototype.constructor = Task$Wait;
  Task$Move.prototype = Object.create(Task.prototype);
  Task$Move.prototype.constructor = Task$Move;
  LevelState$AwaitVisitor.prototype = Object.create(LevelState.prototype);
  LevelState$AwaitVisitor.prototype.constructor = LevelState$AwaitVisitor;
  LevelState$ManageItems.prototype = Object.create(LevelState.prototype);
  LevelState$ManageItems.prototype.constructor = LevelState$ManageItems;
  LevelState$AwaitFailure.prototype = Object.create(LevelState.prototype);
  LevelState$AwaitFailure.prototype.constructor = LevelState$AwaitFailure;
  LevelState$CheckPause.prototype = Object.create(LevelState.prototype);
  LevelState$CheckPause.prototype.constructor = LevelState$CheckPause;
  Location.prototype = Object.create(GameItem.prototype);
  Location.prototype.constructor = Location;
  Character.prototype = Object.create(GameItem.prototype);
  Character.prototype.constructor = Character;
  GameFlowState.prototype = Object.create(imported$Enum.prototype);
  GameFlowState.prototype.constructor = GameFlowState;
  function ControllerAction(name, ordinal) {
    imported$Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ControllerAction_initFields() {
    ControllerAction_initFields = function () {
    };
    ControllerAction$Up_instance = new ControllerAction('Up', 0);
    ControllerAction$Left_instance = new ControllerAction('Left', 1);
    ControllerAction$Right_instance = new ControllerAction('Right', 2);
    ControllerAction$Down_instance = new ControllerAction('Down', 3);
    ControllerAction$Select_instance = new ControllerAction('Select', 4);
    ControllerAction$Submit_instance = new ControllerAction('Submit', 5);
    ControllerAction$_1_instance = new ControllerAction('_1', 6);
    ControllerAction$_2_instance = new ControllerAction('_2', 7);
    ControllerAction$_3_instance = new ControllerAction('_3', 8);
    ControllerAction$_4_instance = new ControllerAction('_4', 9);
    ControllerAction$_5_instance = new ControllerAction('_5', 10);
    ControllerAction$_6_instance = new ControllerAction('_6', 11);
    ControllerAction$_7_instance = new ControllerAction('_7', 12);
    ControllerAction$_8_instance = new ControllerAction('_8', 13);
    ControllerAction$_9_instance = new ControllerAction('_9', 14);
  }
  var ControllerAction$Up_instance;
  function ControllerAction$Up_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Up_instance;
  }
  var ControllerAction$Left_instance;
  function ControllerAction$Left_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Left_instance;
  }
  var ControllerAction$Right_instance;
  function ControllerAction$Right_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Right_instance;
  }
  var ControllerAction$Down_instance;
  function ControllerAction$Down_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Down_instance;
  }
  var ControllerAction$Select_instance;
  function ControllerAction$Select_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Select_instance;
  }
  var ControllerAction$Submit_instance;
  function ControllerAction$Submit_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Submit_instance;
  }
  var ControllerAction$_1_instance;
  function ControllerAction$_1_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_1_instance;
  }
  var ControllerAction$_2_instance;
  function ControllerAction$_2_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_2_instance;
  }
  var ControllerAction$_3_instance;
  function ControllerAction$_3_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_3_instance;
  }
  var ControllerAction$_4_instance;
  function ControllerAction$_4_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_4_instance;
  }
  var ControllerAction$_5_instance;
  function ControllerAction$_5_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_5_instance;
  }
  var ControllerAction$_6_instance;
  function ControllerAction$_6_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_6_instance;
  }
  var ControllerAction$_7_instance;
  function ControllerAction$_7_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_7_instance;
  }
  var ControllerAction$_8_instance;
  function ControllerAction$_8_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_8_instance;
  }
  var ControllerAction$_9_instance;
  function ControllerAction$_9_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_9_instance;
  }
  ControllerAction.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'ControllerAction',
    baseClasses: [imported$Enum]
  };
  function ControllerAction$values() {
    return [ControllerAction$Up_getInstance(), ControllerAction$Left_getInstance(), ControllerAction$Right_getInstance(), ControllerAction$Down_getInstance(), ControllerAction$Select_getInstance(), ControllerAction$Submit_getInstance(), ControllerAction$_1_getInstance(), ControllerAction$_2_getInstance(), ControllerAction$_3_getInstance(), ControllerAction$_4_getInstance(), ControllerAction$_5_getInstance(), ControllerAction$_6_getInstance(), ControllerAction$_7_getInstance(), ControllerAction$_8_getInstance(), ControllerAction$_9_getInstance()];
  }
  ControllerAction.values = ControllerAction$values;
  function ControllerAction$valueOf(name) {
    switch (name) {
      case 'Up':
        return ControllerAction$Up_getInstance();
      case 'Left':
        return ControllerAction$Left_getInstance();
      case 'Right':
        return ControllerAction$Right_getInstance();
      case 'Down':
        return ControllerAction$Down_getInstance();
      case 'Select':
        return ControllerAction$Select_getInstance();
      case 'Submit':
        return ControllerAction$Submit_getInstance();
      case '_1':
        return ControllerAction$_1_getInstance();
      case '_2':
        return ControllerAction$_2_getInstance();
      case '_3':
        return ControllerAction$_3_getInstance();
      case '_4':
        return ControllerAction$_4_getInstance();
      case '_5':
        return ControllerAction$_5_getInstance();
      case '_6':
        return ControllerAction$_6_getInstance();
      case '_7':
        return ControllerAction$_7_getInstance();
      case '_8':
        return ControllerAction$_8_getInstance();
      case '_9':
        return ControllerAction$_9_getInstance();
    }
  }
  ControllerAction.valueOf_61zpoe$ = ControllerAction$valueOf;
  function Controller() {
  }
  Controller.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Controller',
    baseClasses: []
  };
  function KeyboardControllerBase(window_0) {
    this.isDown_el23zu$_0 = imported$hashSetOf([]);
    this.wasPressed_el23zu$_0 = imported$hashSetOf([]);
    this.continuousMode_el23zu$_0 = true;
    var isDown = this.isDown_el23zu$_0;
    window_0.onkeydown = KeyboardControllerBase_init$lambda(isDown, this);
    window_0.onkeyup = KeyboardControllerBase_init$lambda_0(isDown);
  }
  function KeyboardControllerBase$checkHold$lambda(this$KeyboardControllerBase) {
    return function (it) {
      return this$KeyboardControllerBase.isDown_el23zu$_0.contains_za3rmp$(it);
    };
  }
  KeyboardControllerBase.prototype.checkHold_4texox$_0 = function (keys) {
    var tmp$0;
    var tmp$1;
    if (keys != null) {
      imported$any$break: {
        var tmp$2;
        for (tmp$2 = 0; tmp$2 !== keys.length; ++tmp$2) {
          var element = keys[tmp$2];
          if (this.isDown_el23zu$_0.contains_za3rmp$(element)) {
            tmp$1 = true;
            break imported$any$break;
          }
        }
        tmp$1 = false;
      }
    }
     else
      tmp$1 = null;
    return (tmp$0 = tmp$1) != null ? tmp$0 : false;
  };
  KeyboardControllerBase.prototype.retrieveFirst_4texox$_0 = function (keys) {
    var tmp$0, tmp$2;
    tmp$0 = keys != null ? keys : [];
    for (tmp$2 = 0; tmp$2 !== tmp$0.length; ++tmp$2) {
      var key = tmp$0[tmp$2];
      if (this.wasPressed_el23zu$_0.remove_za3rmp$(key)) {
        return true;
      }
    }
    return false;
  };
  KeyboardControllerBase.prototype.isActive_k8o7am$ = function (action) {
    return this.checkHold_4texox$_0(this.holdActionKeys.get_za3rmp$(action)) || this.retrieveFirst_4texox$_0(this.pressActionKeys.get_za3rmp$(action)) || (this.continuousMode_el23zu$_0 ? this.checkHold_4texox$_0(this.mixedActionKeys.get_za3rmp$(action)) : this.retrieveFirst_4texox$_0(this.mixedActionKeys.get_za3rmp$(action)));
  };
  function KeyboardControllerBase_init$lambda(closure$isDown, this$KeyboardControllerBase) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        closure$isDown.add_za3rmp$(it.keyCode);
        this$KeyboardControllerBase.wasPressed_el23zu$_0.add_za3rmp$(it.keyCode);
        if (it.keyCode === KeyCodes_getInstance().P) {
          this$KeyboardControllerBase.continuousMode_el23zu$_0 = !this$KeyboardControllerBase.continuousMode_el23zu$_0;
          this$KeyboardControllerBase.wasPressed_el23zu$_0.clear();
        }
      }
    };
  }
  function KeyboardControllerBase_init$lambda_0(closure$isDown) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        closure$isDown.remove_za3rmp$(it.keyCode);
      }
    };
  }
  KeyboardControllerBase.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'KeyboardControllerBase',
    baseClasses: [Controller]
  };
  function KeyboardController(window_0) {
    KeyboardControllerBase.call(this, window_0);
    this.holdActionKeys_2f7zbr$_0 = Kotlin.kotlin.collections.emptyMap();
    this.mixedActionKeys_2f7zbr$_0 = imported$mapOf_0([imported$to(ControllerAction$Up_getInstance(), [KeyCodes_getInstance().Up, KeyCodes_getInstance().W]), imported$to(ControllerAction$Left_getInstance(), [KeyCodes_getInstance().Left, KeyCodes_getInstance().A]), imported$to(ControllerAction$Down_getInstance(), [KeyCodes_getInstance().Down, KeyCodes_getInstance().S]), imported$to(ControllerAction$Right_getInstance(), [KeyCodes_getInstance().Right, KeyCodes_getInstance().D])]);
    this.pressActionKeys_2f7zbr$_0 = imported$mapOf_0([imported$to(ControllerAction$Submit_getInstance(), [KeyCodes_getInstance().Escape]), imported$to(ControllerAction$Select_getInstance(), [KeyCodes_getInstance().Space, KeyCodes_getInstance().Enter]), imported$to(ControllerAction$_1_getInstance(), [KeyCodes_getInstance()._1]), imported$to(ControllerAction$_2_getInstance(), [KeyCodes_getInstance()._2]), imported$to(ControllerAction$_3_getInstance(), [KeyCodes_getInstance()._3]), imported$to(ControllerAction$_4_getInstance(), [KeyCodes_getInstance()._4]), imported$to(ControllerAction$_5_getInstance(), [KeyCodes_getInstance()._5]), imported$to(ControllerAction$_6_getInstance(), [KeyCodes_getInstance()._6]), imported$to(ControllerAction$_7_getInstance(), [KeyCodes_getInstance()._7]), imported$to(ControllerAction$_8_getInstance(), [KeyCodes_getInstance()._8]), imported$to(ControllerAction$_9_getInstance(), [KeyCodes_getInstance()._9])]);
  }
  Object.defineProperty(KeyboardController.prototype, 'holdActionKeys', {
    get: function () {
      return this.holdActionKeys_2f7zbr$_0;
    }
  });
  Object.defineProperty(KeyboardController.prototype, 'mixedActionKeys', {
    get: function () {
      return this.mixedActionKeys_2f7zbr$_0;
    }
  });
  Object.defineProperty(KeyboardController.prototype, 'pressActionKeys', {
    get: function () {
      return this.pressActionKeys_2f7zbr$_0;
    }
  });
  KeyboardController.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'KeyboardController',
    baseClasses: [KeyboardControllerBase]
  };
  function MenuKeyboardController(window_0) {
    KeyboardControllerBase.call(this, window_0);
    this.holdActionKeys_lc4sp4$_0 = Kotlin.kotlin.collections.emptyMap();
    this.mixedActionKeys_lc4sp4$_0 = Kotlin.kotlin.collections.emptyMap();
    this.pressActionKeys_lc4sp4$_0 = imported$mapOf_0([imported$to(ControllerAction$Up_getInstance(), [KeyCodes_getInstance().Up, KeyCodes_getInstance().W]), imported$to(ControllerAction$Left_getInstance(), [KeyCodes_getInstance().Left, KeyCodes_getInstance().A]), imported$to(ControllerAction$Down_getInstance(), [KeyCodes_getInstance().Down, KeyCodes_getInstance().S]), imported$to(ControllerAction$Right_getInstance(), [KeyCodes_getInstance().Right, KeyCodes_getInstance().D]), imported$to(ControllerAction$Select_getInstance(), [KeyCodes_getInstance().Space, KeyCodes_getInstance().Enter])]);
  }
  Object.defineProperty(MenuKeyboardController.prototype, 'holdActionKeys', {
    get: function () {
      return this.holdActionKeys_lc4sp4$_0;
    }
  });
  Object.defineProperty(MenuKeyboardController.prototype, 'mixedActionKeys', {
    get: function () {
      return this.mixedActionKeys_lc4sp4$_0;
    }
  });
  Object.defineProperty(MenuKeyboardController.prototype, 'pressActionKeys', {
    get: function () {
      return this.pressActionKeys_lc4sp4$_0;
    }
  });
  MenuKeyboardController.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'MenuKeyboardController',
    baseClasses: [KeyboardControllerBase]
  };
  function Dialog(externalContainer, width, height, texture) {
    Dialog$Companion_getInstance();
    this.externalContainer = externalContainer;
    this.width = width;
    this.height = height;
    this.texture = texture;
    this.textures = slice(this.texture, [Dialog$Companion_getInstance().side + 1, Dialog$Companion_getInstance().tileSize + 1, Dialog$Companion_getInstance().side + 1]);
    this.background_0 = new PIXI.ParticleContainer();
    this.container_0 = new PIXI.Container();
    this.clientContainer_0 = new PIXI.Container();
    var tmp$0, tmp$1, tmp$2, tmp$3;
    var xTiles = (this.width - Dialog$Companion_getInstance().side * 2) / Dialog$Companion_getInstance().tileSize | 0;
    var yTiles = (this.height - Dialog$Companion_getInstance().side * 2) / Dialog$Companion_getInstance().tileSize | 0;
    this.actualWidth = xTiles * Dialog$Companion_getInstance().tileSize + Dialog$Companion_getInstance().side * 2;
    this.actualHeight = yTiles * Dialog$Companion_getInstance().tileSize + Dialog$Companion_getInstance().side * 2;
    this.clientWidth = this.actualWidth - Dialog$Companion_getInstance().side * 2;
    this.clientHeight = this.actualHeight - Dialog$Companion_getInstance().side * 2;
    var offsetX = (this.width - this.actualWidth) / 2 | 0;
    var offsetY = (this.height - this.actualHeight) / 2 | 0;
    this.addSprite_0(0, 0, this.textures[0]);
    this.addSprite_0(this.actualWidth - Dialog$Companion_getInstance().side, 0, this.textures[2]);
    this.addSprite_0(0, this.actualHeight - Dialog$Companion_getInstance().side, this.textures[6]);
    this.addSprite_0(this.actualWidth - Dialog$Companion_getInstance().side, this.actualHeight - Dialog$Companion_getInstance().side, this.textures[8]);
    tmp$0 = xTiles - 1;
    for (var x = 0; x <= tmp$0; x++) {
      this.addSprite_0(Dialog$Companion_getInstance().side + x * Dialog$Companion_getInstance().tileSize, 0, this.textures[1]);
      this.addSprite_0(Dialog$Companion_getInstance().side + x * Dialog$Companion_getInstance().tileSize, this.actualHeight - Dialog$Companion_getInstance().side, this.textures[7]);
    }
    tmp$1 = yTiles - 1;
    for (var y = 0; y <= tmp$1; y++) {
      this.addSprite_0(0, Dialog$Companion_getInstance().side + y * Dialog$Companion_getInstance().tileSize, this.textures[3]);
      this.addSprite_0(this.actualWidth - Dialog$Companion_getInstance().side, Dialog$Companion_getInstance().side + y * Dialog$Companion_getInstance().tileSize, this.textures[5]);
    }
    tmp$2 = xTiles - 1;
    for (var x_0 = 0; x_0 <= tmp$2; x_0++) {
      tmp$3 = yTiles - 1;
      for (var y_0 = 0; y_0 <= tmp$3; y_0++) {
        this.addSprite_0(Dialog$Companion_getInstance().side + x_0 * Dialog$Companion_getInstance().tileSize, Dialog$Companion_getInstance().side + y_0 * Dialog$Companion_getInstance().tileSize, this.textures[4]);
      }
    }
    this.background_0.position = new PIXI.Point(offsetX, offsetY);
    this.container_0.addChild(this.background_0);
    this.clientContainer_0.position = new PIXI.Point(Dialog$Companion_getInstance().side + offsetX, Dialog$Companion_getInstance().side + offsetY);
    this.container_0.addChild(this.clientContainer_0);
    this.externalContainer.addChild(this.container_0);
    this.container_0.position;
  }
  Object.defineProperty(Dialog.prototype, 'position', {
    get: function () {
      return this.container_0.position;
    },
    set: function (v) {
      this.container_0.position = v;
    }
  });
  Dialog.prototype.add_68gber$ = function (d) {
    this.clientContainer_0.addChild(d);
    return d;
  };
  Dialog.prototype.remove_68gber$ = function (it) {
    this.clientContainer_0.removeChild(it);
  };
  Dialog.prototype.close = function () {
    this.externalContainer.removeChild(this.container_0);
  };
  Dialog.prototype.addSprite_0 = function (x, y, texture) {
    var sprite = new PIXI.Sprite(texture);
    sprite.position = new PIXI.Point(x, y);
    this.background_0.addChild(sprite);
  };
  function Dialog$Companion() {
    Dialog$Companion_instance = this;
    this.side = 39;
    this.tileSize = 69;
  }
  Dialog$Companion.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Companion',
    baseClasses: []
  };
  var Dialog$Companion_instance = null;
  function Dialog$Companion_getInstance() {
    if (Dialog$Companion_instance === null) {
      Dialog$Companion_instance = new Dialog$Companion();
    }
    return Dialog$Companion_instance;
  }
  Dialog.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Dialog',
    baseClasses: []
  };
  function GameStage() {
  }
  GameStage.prototype.section_ss1lv0$ = function (x, y) {
    return new PIXI.Rectangle(x.start * this.gameSize.x, y.start * this.gameSize.y, get_length(x) * this.gameSize.x, get_length(y) * this.gameSize.y);
  };
  GameStage.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'GameStage',
    baseClasses: []
  };
  function IngameStage(gameSize, itemsPerCharacter, window_0, savedLevel) {
    if (savedLevel === void 0)
      savedLevel = null;
    this.gameSize_mk6v0z$_0 = gameSize;
    this.itemsPerCharacter = itemsPerCharacter;
    var tmp$0;
    this.container = (tmp$0 = savedLevel != null ? savedLevel.container : null) != null ? tmp$0 : new PIXI.Container();
    this.level = savedLevel != null ? savedLevel : new Level(this.container, this.gameSize, 3, this.itemsPerCharacter, window_0);
    this.needsPause = false;
  }
  Object.defineProperty(IngameStage.prototype, 'gameSize', {
    get: function () {
      return this.gameSize_mk6v0z$_0;
    }
  });
  Object.defineProperty(IngameStage.prototype, 'done', {
    get: function () {
      return this.level.levelCompleted;
    }
  });
  IngameStage.prototype.handleController_riqvk4$ = function (controller) {
    var direction;
    if (controller.isActive_k8o7am$(ControllerAction$Up_getInstance()))
      direction = Direction$Down_getInstance();
    else if (controller.isActive_k8o7am$(ControllerAction$Down_getInstance()))
      direction = Direction$Up_getInstance();
    else if (controller.isActive_k8o7am$(ControllerAction$Left_getInstance()))
      direction = Direction$Left_getInstance();
    else if (controller.isActive_k8o7am$(ControllerAction$Right_getInstance()))
      direction = Direction$Right_getInstance();
    else
      direction = Direction$None_getInstance();
    if (controller.isActive_k8o7am$(ControllerAction$_1_getInstance()))
      this.level.action_za3lpa$(0);
    else if (controller.isActive_k8o7am$(ControllerAction$_2_getInstance()))
      this.level.action_za3lpa$(1);
    else if (controller.isActive_k8o7am$(ControllerAction$_3_getInstance()))
      this.level.action_za3lpa$(2);
    else if (controller.isActive_k8o7am$(ControllerAction$_4_getInstance()))
      this.level.action_za3lpa$(3);
    else if (controller.isActive_k8o7am$(ControllerAction$_5_getInstance()))
      this.level.action_za3lpa$(4);
    else if (controller.isActive_k8o7am$(ControllerAction$_6_getInstance()))
      this.level.action_za3lpa$(5);
    else if (controller.isActive_k8o7am$(ControllerAction$_7_getInstance()))
      this.level.action_za3lpa$(6);
    else if (controller.isActive_k8o7am$(ControllerAction$_8_getInstance()))
      this.level.action_za3lpa$(7);
    else if (controller.isActive_k8o7am$(ControllerAction$_9_getInstance()))
      this.level.action_za3lpa$(8);
    this.level.moveDirection = direction;
    if (controller.isActive_k8o7am$(ControllerAction$Select_getInstance())) {
      this.level.hurry();
    }
    if (controller.isActive_k8o7am$(ControllerAction$Submit_getInstance())) {
      this.needsPause = true;
    }
  };
  IngameStage.prototype.update = function () {
    this.level.update();
  };
  Object.defineProperty(IngameStage.prototype, 'root', {
    get: function () {
      return this.container;
    }
  });
  IngameStage.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'IngameStage',
    baseClasses: [GameStage]
  };
  function MenuStage() {
  }
  MenuStage.prototype.handleController_riqvk4$ = function (controller) {
    if (controller.isActive_k8o7am$(ControllerAction$Up_getInstance()))
      this.selectedOption = clamp(this.selectedOption - 1, 0, this.options.size - 1);
    else if (controller.isActive_k8o7am$(ControllerAction$Down_getInstance()))
      this.selectedOption = clamp(this.selectedOption + 1, 0, this.options.size - 1);
    if (controller.isActive_k8o7am$(ControllerAction$Select_getInstance())) {
      this.isReady = true;
    }
  };
  MenuStage.prototype.update = function () {
    var tmp$1;
    tmp$1 = imported$withIndex(this.options).iterator();
    while (tmp$1.hasNext()) {
      var tmp$0 = tmp$1.next()
      , i = tmp$0.component1()
      , option = tmp$0.component2();
      option._tint = i !== this.selectedOption ? 13417420 : 16777215;
    }
  };
  MenuStage.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'MenuStage',
    baseClasses: [GameStage]
  };
  function MainMenuStage(gameSize, window_0) {
    MainMenuStage$Companion_getInstance();
    MenuStage.call(this);
    this.gameSize_dnxcss$_0 = gameSize;
    this.container = new PIXI.Container();
    this.selectedOption_dnxcss$_0 = 0;
    this.isReady_dnxcss$_0 = false;
    var titleStyle = new TextStyle('whitesmoke', void 0, void 0, '32pt  bold');
    var title = new PIXI.Text('Room Service', titleStyle);
    title.position = new PIXI.Point((this.gameSize.x - Kotlin.numberToInt(title.width)) / 2 | 0, 40);
    this.container.addChild(title);
    var d = Dialog_init(this.container, this.section_ss1lv0$(imported$rangeTo(0.0, 1.0), imported$rangeTo(0.2, 1.0)), window_0);
    var messageStyle = new TextStyle('whitesmoke', true, d.clientWidth, '15pt');
    var message = new PIXI.Text(MainMenuStage$Companion_getInstance().messageText, messageStyle);
    message.position = new PIXI.Point(0, 0);
    var y = {v: Kotlin.numberToInt(message.height) + 10};
    var optionStyle = new TextStyle('white', void 0, void 0, '14pt Cursive');
    var $receiver = imported$listOf(['Day 1', 'Day 2', 'Day 3']);
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
    var tmp$1;
    tmp$1 = $receiver.iterator();
    while (tmp$1.hasNext()) {
      var item = tmp$1.next();
      var tmp$3 = destination.add_za3rmp$.bind(destination);
      var text = new PIXI.Text(item, optionStyle);
      text.position = new PIXI.Point((d.clientWidth - Kotlin.numberToInt(text.width)) / 2 | 0, y.v);
      y.v += Kotlin.numberToInt(text.height);
      tmp$3(text);
    }
    this.options_dnxcss$_0 = destination;
    d.add_68gber$(message);
    var tmp$4;
    tmp$4 = this.options.iterator();
    while (tmp$4.hasNext()) {
      var element = tmp$4.next();
      d.add_68gber$(element);
    }
    this.root_dnxcss$_0 = this.container;
  }
  Object.defineProperty(MainMenuStage.prototype, 'gameSize', {
    get: function () {
      return this.gameSize_dnxcss$_0;
    }
  });
  Object.defineProperty(MainMenuStage.prototype, 'options', {
    get: function () {
      return this.options_dnxcss$_0;
    }
  });
  Object.defineProperty(MainMenuStage.prototype, 'selectedOption', {
    get: function () {
      return this.selectedOption_dnxcss$_0;
    },
    set: function (selectedOption) {
      this.selectedOption_dnxcss$_0 = selectedOption;
    }
  });
  Object.defineProperty(MainMenuStage.prototype, 'isReady', {
    get: function () {
      return this.isReady_dnxcss$_0;
    },
    set: function (isReady) {
      this.isReady_dnxcss$_0 = isReady;
    }
  });
  Object.defineProperty(MainMenuStage.prototype, 'root', {
    get: function () {
      return this.root_dnxcss$_0;
    }
  });
  function MainMenuStage$Companion() {
    MainMenuStage$Companion_instance = this;
    this.messageText = 'You work at a hotel. ' + 'As it happens, there is only one room, but several guests have checked in at once. ' + "See that they don't notice anything by making sure they find the room exactly as they left it.";
  }
  MainMenuStage$Companion.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Companion',
    baseClasses: []
  };
  var MainMenuStage$Companion_instance = null;
  function MainMenuStage$Companion_getInstance() {
    if (MainMenuStage$Companion_instance === null) {
      MainMenuStage$Companion_instance = new MainMenuStage$Companion();
    }
    return MainMenuStage$Companion_instance;
  }
  function MainMenuStage_init$lambda(closure$optionStyle, closure$d, closure$y) {
    return function (it) {
      var text = new PIXI.Text(it, closure$optionStyle);
      text.position = new PIXI.Point((closure$d.clientWidth - Kotlin.numberToInt(text.width)) / 2 | 0, closure$y.v);
      closure$y.v += Kotlin.numberToInt(text.height);
      return text;
    };
  }
  function MainMenuStage_init$lambda_0(closure$d) {
    return function (it) {
      closure$d.add_68gber$(it);
    };
  }
  MainMenuStage.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'MainMenuStage',
    baseClasses: [MenuStage]
  };
  function FeedbackStage(gameSize, window_0, day, isSuccess) {
    MenuStage.call(this);
    this.gameSize_rdrqbj$_0 = gameSize;
    this.day = day;
    this.isSuccess = isSuccess;
    this.container = new PIXI.Container();
    this.selectedOption_rdrqbj$_0 = 0;
    this.isReady_rdrqbj$_0 = false;
    var titleStyle = new TextStyle('whitesmoke', void 0, void 0, '24pt  bold', 'center');
    var titleText = this.isSuccess ? 'Congratulations!' + '\n' + 'You have completed Day ' + this.day : 'Game Over';
    var title = new PIXI.Text(titleText, titleStyle);
    title.position = new PIXI.Point((this.gameSize.x - Kotlin.numberToInt(title.width)) / 2 | 0, 40);
    this.container.addChild(title);
    var d = Dialog_init(this.container, this.section_ss1lv0$(imported$rangeTo(0.2, 0.8), imported$rangeTo(0.4, 0.8)), window_0);
    var optionStyle = new TextStyle('white', void 0, void 0, '14pt Cursive');
    var y = {v: 0};
    var $receiver = imported$listOf(['Play again', 'Back to main menu']);
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
    var tmp$1;
    tmp$1 = $receiver.iterator();
    while (tmp$1.hasNext()) {
      var item = tmp$1.next();
      var tmp$3 = destination.add_za3rmp$.bind(destination);
      var text = new PIXI.Text(item, optionStyle);
      text.position = new PIXI.Point((d.clientWidth - Kotlin.numberToInt(text.width)) / 2 | 0, y.v);
      y.v += Kotlin.numberToInt(text.height);
      tmp$3(text);
    }
    this.options_rdrqbj$_0 = destination;
    var tmp$4;
    tmp$4 = this.options.iterator();
    while (tmp$4.hasNext()) {
      var element = tmp$4.next();
      d.add_68gber$(element);
    }
    this.root_rdrqbj$_0 = this.container;
  }
  Object.defineProperty(FeedbackStage.prototype, 'gameSize', {
    get: function () {
      return this.gameSize_rdrqbj$_0;
    }
  });
  Object.defineProperty(FeedbackStage.prototype, 'options', {
    get: function () {
      return this.options_rdrqbj$_0;
    }
  });
  Object.defineProperty(FeedbackStage.prototype, 'selectedOption', {
    get: function () {
      return this.selectedOption_rdrqbj$_0;
    },
    set: function (selectedOption) {
      this.selectedOption_rdrqbj$_0 = selectedOption;
    }
  });
  Object.defineProperty(FeedbackStage.prototype, 'isReady', {
    get: function () {
      return this.isReady_rdrqbj$_0;
    },
    set: function (isReady) {
      this.isReady_rdrqbj$_0 = isReady;
    }
  });
  Object.defineProperty(FeedbackStage.prototype, 'root', {
    get: function () {
      return this.root_rdrqbj$_0;
    }
  });
  function FeedbackStage_init$lambda(closure$optionStyle, closure$d, closure$y) {
    return function (it) {
      var text = new PIXI.Text(it, closure$optionStyle);
      text.position = new PIXI.Point((closure$d.clientWidth - Kotlin.numberToInt(text.width)) / 2 | 0, closure$y.v);
      closure$y.v += Kotlin.numberToInt(text.height);
      return text;
    };
  }
  function FeedbackStage_init$lambda_0(closure$d) {
    return function (it) {
      closure$d.add_68gber$(it);
    };
  }
  FeedbackStage.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'FeedbackStage',
    baseClasses: [MenuStage]
  };
  function PauseStage(gameSize, window_0, pausedLevel) {
    MenuStage.call(this);
    this.gameSize_2acia6$_0 = gameSize;
    this.pausedLevel = pausedLevel;
    this.container = new PIXI.Container();
    this.selectedOption_2acia6$_0 = 0;
    this.isReady_2acia6$_0 = false;
    var titleStyle = new TextStyle('whitesmoke', void 0, void 0, '24pt  bold', 'center');
    var titleText = 'Game paused';
    var title = new PIXI.Text(titleText, titleStyle);
    title.position = new PIXI.Point((this.gameSize.x - Kotlin.numberToInt(title.width)) / 2 | 0, 40);
    this.container.addChild(title);
    var d = Dialog_init(this.container, this.section_ss1lv0$(imported$rangeTo(0.2, 0.8), imported$rangeTo(0.4, 0.8)), window_0);
    var optionStyle = new TextStyle('white', void 0, void 0, '14pt Cursive');
    var y = {v: 0};
    var $receiver = imported$listOf(['Resume', 'Back to main menu']);
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
    var tmp$1;
    tmp$1 = $receiver.iterator();
    while (tmp$1.hasNext()) {
      var item = tmp$1.next();
      var tmp$3 = destination.add_za3rmp$.bind(destination);
      var text = new PIXI.Text(item, optionStyle);
      text.position = new PIXI.Point((d.clientWidth - Kotlin.numberToInt(text.width)) / 2 | 0, y.v);
      y.v += Kotlin.numberToInt(text.height);
      tmp$3(text);
    }
    this.options_2acia6$_0 = destination;
    var tmp$4;
    tmp$4 = this.options.iterator();
    while (tmp$4.hasNext()) {
      var element = tmp$4.next();
      d.add_68gber$(element);
    }
    this.root_2acia6$_0 = this.container;
  }
  Object.defineProperty(PauseStage.prototype, 'gameSize', {
    get: function () {
      return this.gameSize_2acia6$_0;
    }
  });
  Object.defineProperty(PauseStage.prototype, 'options', {
    get: function () {
      return this.options_2acia6$_0;
    }
  });
  Object.defineProperty(PauseStage.prototype, 'selectedOption', {
    get: function () {
      return this.selectedOption_2acia6$_0;
    },
    set: function (selectedOption) {
      this.selectedOption_2acia6$_0 = selectedOption;
    }
  });
  Object.defineProperty(PauseStage.prototype, 'isReady', {
    get: function () {
      return this.isReady_2acia6$_0;
    },
    set: function (isReady) {
      this.isReady_2acia6$_0 = isReady;
    }
  });
  Object.defineProperty(PauseStage.prototype, 'root', {
    get: function () {
      return this.root_2acia6$_0;
    }
  });
  function PauseStage_init$lambda(closure$optionStyle, closure$d, closure$y) {
    return function (it) {
      var text = new PIXI.Text(it, closure$optionStyle);
      text.position = new PIXI.Point((closure$d.clientWidth - Kotlin.numberToInt(text.width)) / 2 | 0, closure$y.v);
      closure$y.v += Kotlin.numberToInt(text.height);
      return text;
    };
  }
  function PauseStage_init$lambda_0(closure$d) {
    return function (it) {
      closure$d.add_68gber$(it);
    };
  }
  PauseStage.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'PauseStage',
    baseClasses: [MenuStage]
  };
  function Point(x, y) {
    Point$Companion_getInstance();
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.x = x;
    this.y = y;
  }
  Point.prototype.plus_h80bq7$ = function (d) {
    return new Point(this.x + d.shift.x, this.y + d.shift.y);
  };
  Point.prototype.minus_h80bq7$ = function (d) {
    return new Point(this.x + d.shift.x, this.y + d.shift.y);
  };
  Point.prototype.plus_1a0nlc$ = function (p) {
    return new Point(this.x + p.x, this.y + p.y);
  };
  Point.prototype.times_za3lpa$ = function (a) {
    return new Point(this.x * a, this.y * a);
  };
  function Point$Companion() {
    Point$Companion_instance = this;
    this.zero = new Point();
  }
  Point$Companion.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Companion',
    baseClasses: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      Point$Companion_instance = new Point$Companion();
    }
    return Point$Companion_instance;
  }
  Point.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Point',
    baseClasses: []
  };
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_vux9f0$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.toString = function () {
    return 'Point(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals_za3rmp$ = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Direction(name, ordinal, shift) {
    imported$Enum.call(this);
    this.shift = shift;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$None_instance = new Direction('None', 0, Point$Companion_getInstance().zero);
    Direction$Up_instance = new Direction('Up', 1, new Point(0, 1));
    Direction$Left_instance = new Direction('Left', 2, new Point(-1, 0));
    Direction$Down_instance = new Direction('Down', 3, new Point(0, -1));
    Direction$Right_instance = new Direction('Right', 4, new Point(1, 0));
  }
  var Direction$None_instance;
  function Direction$None_getInstance() {
    Direction_initFields();
    return Direction$None_instance;
  }
  var Direction$Up_instance;
  function Direction$Up_getInstance() {
    Direction_initFields();
    return Direction$Up_instance;
  }
  var Direction$Left_instance;
  function Direction$Left_getInstance() {
    Direction_initFields();
    return Direction$Left_instance;
  }
  var Direction$Down_instance;
  function Direction$Down_getInstance() {
    Direction_initFields();
    return Direction$Down_instance;
  }
  var Direction$Right_instance;
  function Direction$Right_getInstance() {
    Direction_initFields();
    return Direction$Right_instance;
  }
  Direction.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Direction',
    baseClasses: [imported$Enum]
  };
  function Direction$values() {
    return [Direction$None_getInstance(), Direction$Up_getInstance(), Direction$Left_getInstance(), Direction$Down_getInstance(), Direction$Right_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'None':
        return Direction$None_getInstance();
      case 'Up':
        return Direction$Up_getInstance();
      case 'Left':
        return Direction$Left_getInstance();
      case 'Down':
        return Direction$Down_getInstance();
      case 'Right':
        return Direction$Right_getInstance();
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Vector(x, y) {
    Vector$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  function Vector$Companion() {
    Vector$Companion_instance = this;
    this.zero = new Vector();
  }
  Vector$Companion.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Companion',
    baseClasses: []
  };
  var Vector$Companion_instance = null;
  function Vector$Companion_getInstance() {
    if (Vector$Companion_instance === null) {
      Vector$Companion_instance = new Vector$Companion();
    }
    return Vector$Companion_instance;
  }
  Vector.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Vector',
    baseClasses: []
  };
  Vector.prototype.component1 = function () {
    return this.x;
  };
  Vector.prototype.component2 = function () {
    return this.y;
  };
  Vector.prototype.copy_lu1900$ = function (x, y) {
    return new Vector(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vector.prototype.toString = function () {
    return 'Vector(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Vector.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vector.prototype.equals_za3rmp$ = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function clamp($receiver, min, max) {
    if ($receiver < min)
      return min;
    else if ($receiver > max)
      return max;
    else
      return $receiver;
  }
  function clamp_0($receiver, min, max) {
    return new Point(clamp($receiver.x, min.x, max.x), clamp($receiver.y, min.y, max.y));
  }
  function Task() {
  }
  function Task$Wait(time) {
    Task.call(this);
    this.time = time;
  }
  Task$Wait.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Wait',
    baseClasses: [Task]
  };
  function Task$Move(location, placeItem) {
    Task.call(this);
    this.location = location;
    this.placeItem = placeItem;
  }
  Task$Move.prototype.toString = function () {
    return this.placeItem == null ? 'Take item from ' + this.location : 'Place ' + this.placeItem.name + ' on ' + this.location;
  };
  Task$Move.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Move',
    baseClasses: [Task]
  };
  Task.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Task',
    baseClasses: []
  };
  function LevelState() {
  }
  function LevelState$AwaitVisitor(character, progress) {
    LevelState.call(this);
    this.character = character;
    this.progress = progress;
  }
  LevelState$AwaitVisitor.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'AwaitVisitor',
    baseClasses: [LevelState]
  };
  function LevelState$ManageItems(character, tasks) {
    LevelState.call(this);
    this.character = character;
    this.tasks = tasks;
  }
  LevelState$ManageItems.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'ManageItems',
    baseClasses: [LevelState]
  };
  function LevelState$AwaitFailure(progress) {
    LevelState.call(this);
    this.progress = progress;
  }
  LevelState$AwaitFailure.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'AwaitFailure',
    baseClasses: [LevelState]
  };
  function LevelState$CheckPause(character, messages, progress) {
    LevelState.call(this);
    this.character = character;
    this.messages = messages;
    this.progress = progress;
  }
  LevelState$CheckPause.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'CheckPause',
    baseClasses: [LevelState]
  };
  LevelState.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'LevelState',
    baseClasses: []
  };
  var allItems;
  var colors;
  function Level(container, stageSize, charactersCount, itemsPerCharacter, dialogTexture) {
    Level$Companion_getInstance();
    if (charactersCount === void 0)
      charactersCount = 3;
    if (itemsPerCharacter === void 0)
      itemsPerCharacter = 1;
    this.container = container;
    this.stageSize = stageSize;
    this.charactersCount = charactersCount;
    this.itemsPerCharacter = itemsPerCharacter;
    this.dialogTexture = dialogTexture;
    this.size = new Point(560, 240);
    this.spawnPoint = new Point(this.size.x / 2 | 0, 80);
    this.topLeft = new Point(50, 80);
    this.bottomRight = new Point(510, 200);
    this.locations = imported$arrayListOf([]);
    this.characterSize = new Point(60, 30);
    this.player = new Character(this.characterSize);
    this.inventory = Kotlin.arrayFromFun(allItems.size, Level$inventory$lambda);
    this.npcs = imported$arrayListOf([]);
    this.activeLocation = null;
    this.moveDirection = Direction$None_getInstance();
    this.roomRoot = new PIXI.Container();
    this.inventoryRoot = new PIXI.Container();
    this.inventoryGraphics = new PIXI.Graphics();
    this.graphics = new PIXI.Graphics();
    this.locationSprites = imported$arrayListOf([]);
    this.itemSprites = imported$arrayListOf([]);
    this.inventorySprites = imported$arrayListOf([]);
    this.npcSpriteFirst = true;
    this.levelCompleted = null;
    var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$8;
    var shuffledItems = imported$ArrayList_init(allItems);
    var start;
    var count;
    var tmp$9;
    start = 0;
    count = shuffledItems.size;
    tmp$9 = count - 1;
    for (var i = 0; i <= tmp$9; i++) {
      var swapIndex = Math.random() * (i + 1) | 0;
      if (swapIndex < i) {
        var t = shuffledItems.get_za3lpa$(start + swapIndex);
        shuffledItems.set_vux3hl$(start + swapIndex, shuffledItems.get_za3lpa$(start + i));
        shuffledItems.set_vux3hl$(start + i, t);
      }
    }
    tmp$0 = this.charactersCount - 1;
    for (var i = 0; i <= tmp$0; i++) {
      var items = imported$take(imported$drop(shuffledItems, this.itemsPerCharacter * i), this.itemsPerCharacter);
      var character = new Character(this.characterSize);
      character.items.addAll_wtfk93$(items);
      this.npcs.add_za3rmp$(character);
    }
    var locationsCount = 4;
    var spacing = this.size.x / (locationsCount + 1) | 0;
    tmp$1 = locationsCount - 1;
    for (var i_0 = 0; i_0 <= tmp$1; i_0++) {
      var location = new Location(new Point(75, 75));
      location.position = new Point((i_0 + 1) * spacing - (location.width / 2 | 0), this.size.y - location.height);
      this.locations.add_za3rmp$(location);
    }
    this.schedule = new Schedule(this.npcs, this.locations, 6);
    this.currentState = new LevelState$AwaitVisitor(this.schedule.nextCharacter, 0.5);
    var inventoryPart = this.stageSize.y / 5 | 0;
    var background = new PIXI.Sprite(LevelResources_getInstance().roomTexture);
    background.width = this.size.x;
    background.position = new PIXI.Point(0, 8);
    this.roomRoot.addChild(background);
    this.roomRoot.addChild(this.graphics);
    this.roomRoot.position = new PIXI.Point((this.stageSize.x - this.size.x) / 2 | 0, inventoryPart);
    this.playerSprite = new PIXI.Sprite(LevelResources_getInstance().characterTextures[1]);
    this.npcSprite = new PIXI.Sprite(LevelResources_getInstance().characterTextures[1]);
    this.npcSprite.visible = false;
    this.player.position = this.spawnPoint;
    this.playerAnimation = new CharacterAnimation(this.playerSprite);
    this.npcAnimation = new CharacterAnimation(this.npcSprite);
    this.roomRoot.addChild(this.playerSprite);
    this.roomRoot.addChild(this.npcSprite);
    tmp$2 = this.locations.iterator();
    while (tmp$2.hasNext()) {
      var location_0 = tmp$2.next();
      var sprite = new PIXI.Sprite(LevelResources_getInstance().tableTexture);
      sprite.width = location_0.width;
      sprite.height = location_0.height;
      sprite.position = new PIXI.Point(location_0.x, location_0.y - 10);
      this.locationSprites.add_za3rmp$(sprite);
      this.roomRoot.addChild(sprite);
    }
    this.highlightSprite = new PIXI.Sprite(LevelResources_getInstance().tableTexture);
    this.highlightSprite.visible = false;
    this.highlightSprite.width = 75;
    this.highlightSprite.height = 75;
    this.highlightSprite.blendMode = PIXI.BLEND_MODES.SCREEN;
    this.roomRoot.addChild(this.highlightSprite);
    tmp$3 = imported$get_indices(allItems);
    tmp$4 = tmp$3.first;
    tmp$5 = tmp$3.last;
    tmp$6 = tmp$3.step;
    for (var i_1 = tmp$4; i_1 <= tmp$5; i_1 += tmp$6) {
      var sprite_0 = new PIXI.Sprite(LevelResources_getInstance().itemTextures[i_1]);
      this.roomRoot.addChild(sprite_0);
      this.itemSprites.add_za3rmp$(sprite_0);
      sprite_0.visible = false;
    }
    this.previewSprite = new PIXI.Sprite(LevelResources_getInstance().characterTextures[(this.npcs.indexOf_za3rmp$(this.schedule.nextCharacter) + 1) * 3 + 1]);
    this.previewSprite.position = new PIXI.Point(0, this.size.y + 20);
    this.previewSprite.scale = new PIXI.Point(0.5, 0.5);
    this.roomRoot.addChild(this.previewSprite);
    this.inventoryGraphics.lineStyle(3, 11171584);
    var shift = this.size.x / allItems.size + 1;
    tmp$8 = imported$withIndex(allItems).iterator();
    while (tmp$8.hasNext()) {
      var tmp$7 = tmp$8.next()
      , i_2 = tmp$7.component1()
      , item = tmp$7.component2();
      var sprite_1 = new PIXI.Sprite(LevelResources_getInstance().itemTextures[i_2]);
      sprite_1.width = 60;
      sprite_1.height = 60;
      sprite_1.visible = false;
      sprite_1.position = new PIXI.Point((i_2 + 1) * shift - Kotlin.numberToDouble(sprite_1.width) / 2, 6);
      this.inventoryRoot.addChild(sprite_1);
      this.inventorySprites.add_za3rmp$(sprite_1);
      this.inventoryGraphics.drawRect(Kotlin.numberToInt(sprite_1.position.x) - 2, Kotlin.numberToInt(sprite_1.position.y) + 4, Kotlin.numberToInt(sprite_1.width) + 4, Kotlin.numberToInt(sprite_1.height) + 4);
    }
    this.inventoryRoot.addChild(this.inventoryGraphics);
    var helpText = '<Arrows>, <WASD>: Move\n<Enter>, <Space>:  Skip to the next visitor\n<1-9>: Take/place item\n<Esc>: Pause';
    this.help = new PIXI.Text(helpText, new TextStyle('blanchedAlmond', false, void 0, '14pt'));
    this.help.position = new PIXI.Point(80, this.size.y + 10);
    this.roomRoot.addChild(this.help);
    this.container.addChild(this.inventoryRoot);
    this.container.addChild(this.roomRoot);
  }
  function Level$update$lambda(this$Level) {
    return function (it) {
      return Math.abs(it.midX - this$Level.player.x);
    };
  }
  Level.prototype.update = function () {
    var tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
    if (this.moveDirection !== Direction$None_getInstance()) {
      this.playerAnimation.start();
      this.move_1a0nlc$(this.moveDirection.shift);
    }
     else {
      this.playerAnimation.stop();
    }
    this.playerAnimation.update_b29hb1$(this.player.position, this.moveDirection);
    this.graphics.clear();
    this.graphics.lineStyle(4, 65280);
    var state = this.currentState;
    if (Kotlin.isType(state, LevelState$AwaitVisitor)) {
      if (this.player.position.y > this.bottomRight.y - 30) {
        var $receiver = this.locations;
        imported$minBy$break: {
          var iterator_2 = $receiver.iterator();
          if (!iterator_2.hasNext()) {
            this.activeLocation = null;
            break imported$minBy$break;
          }
          var minElem = iterator_2.next();
          var it = minElem;
          var minValue = Math.abs(it.midX - this.player.x);
          while (iterator_2.hasNext()) {
            var e = iterator_2.next();
            var v = Math.abs(e.midX - this.player.x);
            if (Kotlin.compareTo(minValue, v) > 0) {
              minElem = e;
              minValue = v;
            }
          }
          this.activeLocation = minElem;
        }
      }
       else
        this.activeLocation = null;
      this.graphics.beginFill(255);
      this.graphics.drawRect(0, this.size.y, state.progress * 50, 10);
      this.graphics.endFill();
      state.progress = state.progress - 0.001;
      if (state.progress <= 0.0) {
        this.activeLocation = null;
        state.character.position = this.spawnPoint;
        this.npcSprite.visible = true;
        this.npcAnimation.animationIndex = this.npcs.indexOf_za3rmp$(state.character) + 1;
        this.npcAnimation.stop();
        this.npcAnimation.update_b29hb1$(state.character.position, Direction$Left_getInstance());
        var messages = this.schedule.checkState();
        this.currentState = new LevelState$CheckPause(state.character, messages, !messages.isEmpty() ? 1.0 : 0.5);
      }
    }
     else if (Kotlin.isType(state, LevelState$CheckPause)) {
      state.progress = state.progress - 0.02;
      if (state.progress <= 0) {
        if (!state.messages.isEmpty()) {
          this.initFailure_3faklk$(state.messages);
        }
         else {
          var tasks = this.createTasks_c0pxbr$(state.character);
          this.currentState = new LevelState$ManageItems(state.character, tasks);
          this.npcAnimation.start();
          this.npcAnimation.update_b29hb1$(state.character.position, Direction$Left_getInstance());
        }
      }
    }
     else if (Kotlin.isType(state, LevelState$ManageItems)) {
      var character = state.character;
      if (state.tasks.isEmpty()) {
        this.schedule.rememberState();
        if (this.schedule.completed) {
          this.levelCompleted = true;
        }
         else {
          this.currentState = new LevelState$AwaitVisitor(this.schedule.nextCharacter, 1.0);
          this.activeLocation = null;
          this.npcSprite.visible = false;
          this.npcAnimation.stop();
          this.previewSprite.texture = LevelResources_getInstance().characterTextures[(this.npcs.indexOf_za3rmp$(this.schedule.nextCharacter) + 1) * 3 + 1];
        }
      }
       else {
        var task = imported$first(state.tasks);
        if (Kotlin.isType(task, Task$Wait)) {
          var dy = character.y > this.topLeft.y + 10 ? -2 : 0;
          if (((this.topLeft.x + this.bottomRight.x) / 2 | 0) > character.x + 4)
            tmp$1 = 3;
          else if (((this.topLeft.x + this.bottomRight.x) / 2 | 0) < character.x - 4)
            tmp$1 = -3;
          else
            tmp$1 = 0;
          var dx = tmp$1;
          if (dx !== 0 || dy !== 0) {
            character.position = character.position.plus_1a0nlc$(new Point(dx, dy));
            tmp$4 = this.npcAnimation;
            tmp$3 = character.position;
            if (dx > 0)
              tmp$2 = Direction$Right_getInstance();
            else if (dx < 0)
              tmp$2 = Direction$Left_getInstance();
            else
              tmp$2 = Direction$Up_getInstance();
            tmp$4.update_b29hb1$(tmp$3, tmp$2);
          }
           else {
            this.npcAnimation.stop();
            task.time = task.time - 0.1;
            if (task.time <= 0.0) {
              state.tasks.removeAt_za3lpa$(0);
              this.npcAnimation.start();
            }
          }
        }
         else if (Kotlin.isType(task, Task$Move)) {
          var dx_0 = Math.abs(task.location.midX - character.x) | 0;
          if (character.y > this.bottomRight.y - 20 && dx_0 < (task.location.width / 4 | 0)) {
            var item = task.location.item;
            if (item != null) {
              this.updateItemSprite_dy9mwe$(item, null);
              character.items.add_za3rmp$(item);
              task.location.item = null;
            }
             else if (task.placeItem != null) {
              this.updateItemSprite_dy9mwe$(task.placeItem, task.location);
              character.items.remove_za3rmp$(task.placeItem);
              task.location.item = task.placeItem;
            }
            state.tasks.removeAt_za3lpa$(0);
          }
           else {
            if (task.location.midX > character.x + 4)
              tmp$5 = 3;
            else if (task.location.midX < character.x - 4)
              tmp$5 = -3;
            else
              tmp$5 = 0;
            var shift = new Point(tmp$5, character.y < this.bottomRight.y ? 2 : 0);
            character.position = character.position.plus_1a0nlc$(shift);
            this.npcAnimation.update_b29hb1$(character.position, shift.x > 0 ? Direction$Right_getInstance() : Direction$Left_getInstance());
          }
        }
      }
    }
     else if (Kotlin.isType(state, LevelState$AwaitFailure)) {
      state.progress = state.progress - 0.005;
      if (state.progress <= 0.0) {
        this.levelCompleted = false;
      }
    }
    var location = this.activeLocation;
    if (location != null) {
      this.highlightSprite.position = new PIXI.Point(location.x, location.y - 10);
      this.highlightSprite.visible = true;
    }
     else {
      this.highlightSprite.visible = false;
    }
    if (this.npcSpriteFirst) {
      if (Kotlin.numberToInt(this.npcSprite.position.y) < Kotlin.numberToInt(this.playerSprite.position.y)) {
        this.roomRoot.swapChildren(this.playerSprite, this.npcSprite);
        this.npcSpriteFirst = false;
      }
    }
     else {
      if (Kotlin.numberToInt(this.npcSprite.position.y) > Kotlin.numberToInt(this.playerSprite.position.y)) {
        this.roomRoot.swapChildren(this.playerSprite, this.npcSprite);
        this.npcSpriteFirst = true;
      }
    }
  };
  Level.prototype.draw_y1su1o$ = function ($receiver, item) {
    $receiver.drawRect(item.x, item.y, item.width, item.height);
  };
  Level.prototype.initFailure_3faklk$ = function (messages) {
    var text = new PIXI.Text(imported$joinToString(imported$take(messages, 3), '\n'), new TextStyle('blanchedAlmond', void 0, void 0, '14pt bold', 'center'));
    var width = Kotlin.numberToInt(text.width) + Dialog$Companion_getInstance().side * 2 + Dialog$Companion_getInstance().tileSize * 2;
    var height = Kotlin.numberToInt(text.height) + Dialog$Companion_getInstance().side * 2 + Dialog$Companion_getInstance().tileSize;
    var dialog = Dialog_init(this.roomRoot, new PIXI.Rectangle((this.size.x - width) / 2 | 0, 0, width, height), this.dialogTexture);
    text.position = new PIXI.Point((dialog.clientWidth - Kotlin.numberToInt(text.width)) / 2 | 0, (dialog.clientHeight - Kotlin.numberToInt(text.height)) / 2 | 0);
    dialog.add_68gber$(text);
    this.currentState = new LevelState$AwaitFailure(1.0);
  };
  Level.prototype.updateItemSprite_dy9mwe$ = function (item, location) {
    var sprite = this.itemSprites.get_za3lpa$(allItems.indexOf_za3rmp$(item));
    if (location == null) {
      sprite.visible = false;
    }
     else {
      sprite.position = new PIXI.Point(location.position.x + ((location.width - item.width) / 2 | 0), location.position.y - (item.height / 4 | 0) - 15);
      var scale = item.width / Kotlin.numberToDouble(sprite.texture.frame.width);
      sprite.scale = new PIXI.Point(scale, scale);
      sprite.visible = true;
    }
  };
  Level.prototype.move_1a0nlc$ = function (shift) {
    var tmp$0;
    var state = this.currentState;
    var scaleShift = shift.times_za3lpa$(4);
    var newPosition = this.player.position.plus_1a0nlc$(scaleShift);
    if (Kotlin.isType(state, LevelState$ManageItems)) {
      newPosition = (tmp$0 = this.block_jdg0z2$(state.character, this.player, scaleShift)) != null ? tmp$0 : newPosition;
    }
    this.player.position = clamp_0(newPosition, this.topLeft, this.bottomRight);
  };
  function Level$createTasks$lambda(it) {
    return it.item;
  }
  function Level$createTasks$lambda_0(closure$item) {
    return function (it) {
      return Kotlin.equals(it.item, closure$item);
    };
  }
  Level.prototype.createTasks_c0pxbr$ = function (character) {
    var tmp$0, tmp$2;
    var heldItems = character.items;
    var $receiver = this.locations;
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$();
    var tmp$4;
    tmp$4 = $receiver.iterator();
    while (tmp$4.hasNext()) {
      var element = tmp$4.next();
      var tmp$3;
      (tmp$3 = element.item) != null ? destination.add_za3rmp$(tmp$3) : null;
    }
    var placedItems = destination;
    var maxActions = heldItems.size + placedItems.size;
    var actions = Math.min(2, (Math.random() * (maxActions - 1) | 0) + 1);
    var _takeActions = Math.random() * actions | 0;
    var _placeActions = Math.min(actions - _takeActions, heldItems.size);
    var takeActions = Math.min(placedItems.size, Math.max(_takeActions, actions - _placeActions));
    var placeActions = Math.min(heldItems.size, Math.max(_placeActions, actions - takeActions));
    var tasks = imported$arrayListOf([]);
    tmp$0 = takeActions - 1;
    for (var i = 0; i <= tmp$0; i++) {
      var item = placedItems.get_za3lpa$(i);
      var $receiver_0 = this.locations;
      imported$first_0$break: {
        var tmp$5;
        tmp$5 = $receiver_0.iterator();
        while (tmp$5.hasNext()) {
          var element_0 = tmp$5.next();
          if (Kotlin.equals(element_0.item, item)) {
            var location = element_0;
            break imported$first_0$break;
          }
        }
        throw new Kotlin.kotlin.NoSuchElementException('Collection contains no element matching the predicate.');
      }
      tasks.add_za3rmp$(new Task$Move(location, null));
    }
    var placeLocations = imported$ArrayList_init(this.locations);
    var start;
    var count;
    var tmp$6;
    start = 0;
    count = placeLocations.size;
    tmp$6 = count - 1;
    for (var i_1 = 0; i_1 <= tmp$6; i_1++) {
      var swapIndex = Math.random() * (i_1 + 1) | 0;
      if (swapIndex < i_1) {
        var t = placeLocations.get_za3lpa$(start + swapIndex);
        placeLocations.set_vux3hl$(start + swapIndex, placeLocations.get_za3lpa$(start + i_1));
        placeLocations.set_vux3hl$(start + i_1, t);
      }
    }
    tmp$2 = imported$withIndex(imported$take(placeLocations, placeActions)).iterator();
    while (tmp$2.hasNext()) {
      var tmp$1 = tmp$2.next()
      , i_0 = tmp$1.component1()
      , location_0 = tmp$1.component2();
      var item_0 = heldItems.get_za3lpa$(i_0);
      tasks.add_za3rmp$(new Task$Move(location_0, item_0));
    }
    tasks.add_za3rmp$(new Task$Wait(0.5));
    return tasks;
  };
  Level.prototype.block_jdg0z2$ = function ($receiver, other, shift) {
    var tmp$0, tmp$1, tmp$2;
    var intersects = (new imported$IntRange($receiver.x - other.width, $receiver.endX)).contains_htax2k$(other.x + shift.x) && (new imported$IntRange($receiver.y - other.height, $receiver.endY)).contains_htax2k$(other.y + shift.y);
    if (intersects) {
      if ((new imported$IntRange(other.endX, other.endX + shift.x)).contains_htax2k$($receiver.x))
        tmp$0 = $receiver.x - other.width - 1;
      else if ((new imported$IntRange(other.x + shift.x, other.x)).contains_htax2k$($receiver.endX))
        tmp$0 = $receiver.endX + 1;
      else
        tmp$0 = other.x + shift.x;
      var xClamp = tmp$0;
      if ((new imported$IntRange(other.endY, other.endY + shift.y)).contains_htax2k$($receiver.y))
        tmp$1 = $receiver.y - other.height - 1;
      else if ((new imported$IntRange(other.y + shift.y, other.y)).contains_htax2k$($receiver.endY))
        tmp$1 = $receiver.endY + 1;
      else
        tmp$1 = other.y + shift.y;
      var yClamp = tmp$1;
      tmp$2 = new Point(xClamp, yClamp);
    }
     else {
      tmp$2 = null;
    }
    return tmp$2;
  };
  function Level$action$lambda(it) {
    it.visible = false;
  }
  Level.prototype.action_za3lpa$ = function (inventoryIndex) {
    var tmp$1;
    var location = this.activeLocation;
    if (location != null) {
      var item = location.item;
      var replaceItem = this.inventory[inventoryIndex];
      if (item != null) {
        this.updateItemSprite_dy9mwe$(item, null);
        location.item = null;
        this.inventory[inventoryIndex] = item;
      }
      if (replaceItem != null) {
        this.updateItemSprite_dy9mwe$(replaceItem, location);
        location.item = replaceItem;
        if (item == null) {
          this.inventory[inventoryIndex] = null;
        }
      }
    }
    var shift = this.size.x / allItems.size + 1;
    var tmp$2;
    tmp$2 = this.inventorySprites.iterator();
    while (tmp$2.hasNext()) {
      var element = tmp$2.next();
      element.visible = false;
    }
    tmp$1 = imported$withIndex(allItems).iterator();
    while (tmp$1.hasNext()) {
      var tmp$0 = tmp$1.next()
      , i = tmp$0.component1()
      , item_0 = tmp$0.component2();
      var index = imported$indexOf(this.inventory, item_0);
      if (index >= 0) {
        var sprite = this.inventorySprites.get_za3lpa$(i);
        sprite.position = new PIXI.Point((index + 1) * shift - Kotlin.numberToDouble(sprite.width) / 2, 10);
        sprite.visible = true;
      }
    }
  };
  Level.prototype.hurry = function () {
    var state = this.currentState;
    if (Kotlin.isType(state, LevelState$AwaitVisitor)) {
      state.progress = 0.0;
    }
     else if (Kotlin.isType(state, LevelState$AwaitFailure)) {
      state.progress = 0.08;
    }
  };
  function Level$Companion() {
    Level$Companion_instance = this;
    this.activateDistance = 20;
  }
  Level$Companion.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Companion',
    baseClasses: []
  };
  var Level$Companion_instance = null;
  function Level$Companion_getInstance() {
    if (Level$Companion_instance === null) {
      Level$Companion_instance = new Level$Companion();
    }
    return Level$Companion_instance;
  }
  function Level$inventory$lambda(it) {
    return null;
  }
  Level.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Level',
    baseClasses: []
  };
  function LevelResources() {
    LevelResources_instance = this;
    this.roomTexture = PIXI.Texture.fromImage('images/room.png', false);
    this.tableTexture = PIXI.Texture.fromImage('images/table.png', false);
    this.itemsBase = PIXI.BaseTexture.fromImage('images/items.png', false);
    this.itemTextures = slice(this.itemsBase, [100, 100, 100]);
    this.charactersBase = PIXI.BaseTexture.fromImage('images/characters.png', false);
    this.characterTextures = slice_0(this.charactersBase, new PIXI.Point(100, 162), 3, 4);
  }
  LevelResources.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'LevelResources',
    baseClasses: []
  };
  var LevelResources_instance = null;
  function LevelResources_getInstance() {
    if (LevelResources_instance === null) {
      LevelResources_instance = new LevelResources();
    }
    return LevelResources_instance;
  }
  function CharacterAnimation(sprite, animationIndex) {
    if (animationIndex === void 0)
      animationIndex = 0;
    this.sprite = sprite;
    this.animationIndex = animationIndex;
    this.progress = 0.0;
    this.isRunning = false;
    this.scale = 0.65;
    this.orientation = 1.0;
  }
  CharacterAnimation.prototype.start = function () {
    this.isRunning = true;
  };
  CharacterAnimation.prototype.stop = function () {
    this.isRunning = false;
    this.sprite.texture = LevelResources_getInstance().characterTextures[this.animationIndex * 3 + 1];
  };
  CharacterAnimation.prototype.update_b29hb1$ = function (position, direction) {
    if (this.isRunning) {
      this.progress += 0.1;
      if (this.progress >= 4.0) {
        this.progress = 0.0;
      }
      var frame = Math.floor(this.progress);
      var texture = this.animationIndex * 3 + frame - 2 * (frame / 3 | 0);
      this.sprite.texture = LevelResources_getInstance().characterTextures[texture];
      if (Kotlin.equals(direction, Direction$Right_getInstance()))
        this.orientation = -1.0;
      else if (Kotlin.equals(direction, Direction$Left_getInstance()))
        this.orientation = 1.0;
      else if (Kotlin.equals(direction, Direction$Up_getInstance()))
        this.orientation = position.x < 280 ? 1.0 : -1.0;
      else if (Kotlin.equals(direction, Direction$Down_getInstance()))
        this.orientation = position.x < 280 ? -1.0 : 1.0;
    }
    var dy = 200 - position.y;
    var perspective = 1.0 - dy / 270.0;
    var dx = (280 - position.x) * perspective;
    var x = 280 - dx;
    var scale = this.scale * perspective;
    this.sprite.scale = new PIXI.Point(scale * this.orientation, scale);
    var y = position.y - Kotlin.numberToInt(this.sprite.height);
    var w = Kotlin.numberToInt(this.sprite.width) / 2 | 0;
    this.sprite.position = Kotlin.numberToDouble(this.sprite.scale.x) > 0 ? new PIXI.Point(x - w, y) : new PIXI.Point(x + w, y);
  };
  CharacterAnimation.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'CharacterAnimation',
    baseClasses: []
  };
  function Schedule(characters, locations, rounds) {
    this.characters = characters;
    this.locations = locations;
    this.rounds = rounds;
    this.entries = imported$arrayListOf([]);
    this.nextEntry = 0;
    var tmp$0, tmp$1, tmp$2, tmp$3;
    tmp$0 = this.rounds - 1;
    for (var round = 0; round <= tmp$0; round++) {
      var tmp$4;
      tmp$4 = this.characters.iterator();
      while (tmp$4.hasNext()) {
        var element = tmp$4.next();
        this.entries.add_za3rmp$(new Schedule$Entry(element));
      }
      var list = this.entries;
      var start = round * this.characters.size;
      var tmp$5;
      tmp$5 = this.characters.size - 1;
      for (var i = 0; i <= tmp$5; i++) {
        var swapIndex = Math.random() * (i + 1) | 0;
        if (swapIndex < i) {
          var t = list.get_za3lpa$(start + swapIndex);
          list.set_vux3hl$(start + swapIndex, list.get_za3lpa$(start + i));
          list.set_vux3hl$(start + i, t);
        }
      }
    }
    if (this.characters.size > 1) {
      tmp$1 = this.rounds - 1;
      for (var round_0 = 1; round_0 <= tmp$1; round_0++) {
        var borderIndex = round_0 * this.characters.size;
        if (Kotlin.equals(this.entries.get_za3lpa$(borderIndex).character, this.entries.get_za3lpa$(borderIndex - 1).character)) {
          var swapIndex = borderIndex + 1 + (Math.random() * (this.characters.size - 1) | 0);
          var t = this.entries.get_za3lpa$(borderIndex);
          this.entries.set_vux3hl$(borderIndex, this.entries.get_za3lpa$(swapIndex));
          this.entries.set_vux3hl$(swapIndex, t);
        }
      }
    }
    tmp$2 = this.characters.iterator();
    while (tmp$2.hasNext()) {
      var character = tmp$2.next();
      var $receiver_0 = this.entries;
      imported$first_0$break: {
        var tmp$6;
        tmp$6 = $receiver_0.iterator();
        while (tmp$6.hasNext()) {
          var element_0 = tmp$6.next();
          if (Kotlin.equals(element_0.character, character)) {
            var entry = element_0;
            break imported$first_0$break;
          }
        }
        throw new Kotlin.kotlin.NoSuchElementException('Collection contains no element matching the predicate.');
      }
      tmp$3 = this.locations.iterator();
      while (tmp$3.hasNext()) {
        var location = tmp$3.next();
        entry.expectedState.add_za3rmp$(new imported$Pair(location, null));
      }
    }
  }
  function Schedule$Entry(character) {
    this.character = character;
    this.expectedState = imported$arrayListOf([]);
  }
  Schedule$Entry.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Entry',
    baseClasses: []
  };
  Object.defineProperty(Schedule.prototype, 'nextCharacter', {
    get: function () {
      return this.entries.get_za3lpa$(this.nextEntry).character;
    }
  });
  Object.defineProperty(Schedule.prototype, 'completed', {
    get: function () {
      return this.nextEntry >= this.entries.size;
    }
  });
  function Schedule$nextVisit$lambda(this$Schedule, closure$character) {
    return function (it) {
      return Kotlin.equals(this$Schedule.entries.get_za3lpa$(it).character, closure$character);
    };
  }
  Schedule.prototype.nextVisit_c0pxbr$ = function (character) {
    var tmp$0;
    var $receiver = new imported$IntRange(this.nextEntry + 1, this.entries.size - 1);
    var imported$firstOrNull$result;
    imported$firstOrNull$break: {
      var tmp$1;
      tmp$1 = $receiver.iterator();
      while (tmp$1.hasNext()) {
        var element = tmp$1.next();
        if (Kotlin.equals(this.entries.get_za3lpa$(element).character, character)) {
          imported$firstOrNull$result = element;
          break imported$firstOrNull$break;
        }
      }
      imported$firstOrNull$result = null;
    }
    return (tmp$0 = imported$firstOrNull$result) != null ? tmp$0 : -1;
  };
  Schedule.prototype.rememberState = function () {
    var tmp$0;
    var returnEntry = this.nextVisit_c0pxbr$(this.entries.get_za3lpa$(this.nextEntry).character);
    ++this.nextEntry;
    if (returnEntry >= 0) {
      var entry = this.entries.get_za3lpa$(returnEntry);
      tmp$0 = this.locations.iterator();
      while (tmp$0.hasNext()) {
        var location = tmp$0.next();
        entry.expectedState.add_za3rmp$(new imported$Pair(location, location.item));
      }
    }
  };
  function Schedule$checkState$lambda(it) {
    return it.second;
  }
  function Schedule$checkState$lambda_0(closure$item) {
    return function (it) {
      return Kotlin.equals(it.item, closure$item);
    };
  }
  Schedule.prototype.checkState = function () {
    var tmp$1;
    var result = imported$ArrayList_init_0();
    var entry = this.entries.get_za3lpa$(this.nextEntry);
    var $receiver = entry.expectedState;
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$();
    var tmp$3;
    tmp$3 = $receiver.iterator();
    while (tmp$3.hasNext()) {
      var element = tmp$3.next();
      var tmp$2;
      (tmp$2 = element.second) != null ? destination.add_za3rmp$(tmp$2) : null;
    }
    var expectedItems = destination;
    tmp$1 = entry.expectedState.iterator();
    while (tmp$1.hasNext()) {
      var tmp$0 = tmp$1.next()
      , location = tmp$0.component1()
      , item = tmp$0.component2();
      var existingItem = location.item;
      if (existingItem == null) {
        var tmp$4 = item != null;
        if (tmp$4) {
          var $receiver_0 = this.locations;
          var imported$any_0$result;
          imported$any_0$break: {
            var tmp$5;
            tmp$5 = $receiver_0.iterator();
            while (tmp$5.hasNext()) {
              var element_0 = tmp$5.next();
              if (Kotlin.equals(element_0.item, item)) {
                imported$any_0$result = true;
                break imported$any_0$break;
              }
            }
            imported$any_0$result = false;
          }
          tmp$4 = !imported$any_0$result;
        }
        if (tmp$4) {
          result.add_za3rmp$('Where is my ' + item.name + '?!');
        }
      }
       else if (!expectedItems.contains_za3rmp$(existingItem)) {
        result.add_za3rmp$('What is this ' + existingItem.name + ' doing here?!');
      }
       else if (!Kotlin.equals(existingItem, item)) {
        result.add_za3rmp$('Why has my ' + existingItem.name + ' been moved?!');
      }
    }
    return result;
  };
  function Schedule_init$lambda(this$Schedule) {
    return function (it) {
      this$Schedule.entries.add_za3rmp$(new Schedule$Entry(it));
    };
  }
  function Schedule_init$lambda_0(closure$character) {
    return function (it) {
      return Kotlin.equals(it.character, closure$character);
    };
  }
  Schedule.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Schedule',
    baseClasses: []
  };
  var permute = Kotlin.defineInlineFunction('LD37.permute_2k50fz$', function (permute$T_0, isT, list, start, count) {
    var tmp$0;
    if (start === void 0)
      start = 0;
    if (count === void 0)
      count = list.size;
    tmp$0 = count - 1;
    for (var i = 0; i <= tmp$0; i++) {
      var swapIndex = Math.random() * (i + 1) | 0;
      if (swapIndex < i) {
        var t = list.get_za3lpa$(start + swapIndex);
        list.set_vux3hl$(start + swapIndex, list.get_za3lpa$(start + i));
        list.set_vux3hl$(start + i, t);
      }
    }
  });
  function GameItem(size) {
    this.size = size;
    this.position = Point$Companion_getInstance().zero;
  }
  Object.defineProperty(GameItem.prototype, 'x', {
    get: function () {
      return this.position.x;
    }
  });
  Object.defineProperty(GameItem.prototype, 'y', {
    get: function () {
      return this.position.y;
    }
  });
  Object.defineProperty(GameItem.prototype, 'width', {
    get: function () {
      return this.size.x;
    }
  });
  Object.defineProperty(GameItem.prototype, 'height', {
    get: function () {
      return this.size.y;
    }
  });
  Object.defineProperty(GameItem.prototype, 'midX', {
    get: function () {
      return this.x + (this.width / 2 | 0);
    }
  });
  Object.defineProperty(GameItem.prototype, 'midY', {
    get: function () {
      return this.y + (this.height / 2 | 0);
    }
  });
  Object.defineProperty(GameItem.prototype, 'endX', {
    get: function () {
      return this.x + this.width;
    }
  });
  Object.defineProperty(GameItem.prototype, 'endY', {
    get: function () {
      return this.y + this.height;
    }
  });
  GameItem.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'GameItem',
    baseClasses: []
  };
  function Location(size) {
    GameItem.call(this, size);
    this.item = null;
  }
  Location.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Location',
    baseClasses: [GameItem]
  };
  function Character(size) {
    GameItem.call(this, size);
    this.items = imported$arrayListOf([]);
  }
  Character.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Character',
    baseClasses: [GameItem]
  };
  function Item(size, name) {
    this.size = size;
    this.name = name;
  }
  Object.defineProperty(Item.prototype, 'width', {
    get: function () {
      return this.size.x;
    }
  });
  Object.defineProperty(Item.prototype, 'height', {
    get: function () {
      return this.size.y;
    }
  });
  Item.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Item',
    baseClasses: []
  };
  function GameFlowState(name, ordinal) {
    imported$Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameFlowState_initFields() {
    GameFlowState_initFields = function () {
    };
    GameFlowState$DaySelection_instance = new GameFlowState('DaySelection', 0);
    GameFlowState$Ingame_instance = new GameFlowState('Ingame', 1);
    GameFlowState$Feedback_instance = new GameFlowState('Feedback', 2);
    GameFlowState$Pause_instance = new GameFlowState('Pause', 3);
  }
  var GameFlowState$DaySelection_instance;
  function GameFlowState$DaySelection_getInstance() {
    GameFlowState_initFields();
    return GameFlowState$DaySelection_instance;
  }
  var GameFlowState$Ingame_instance;
  function GameFlowState$Ingame_getInstance() {
    GameFlowState_initFields();
    return GameFlowState$Ingame_instance;
  }
  var GameFlowState$Feedback_instance;
  function GameFlowState$Feedback_getInstance() {
    GameFlowState_initFields();
    return GameFlowState$Feedback_instance;
  }
  var GameFlowState$Pause_instance;
  function GameFlowState$Pause_getInstance() {
    GameFlowState_initFields();
    return GameFlowState$Pause_instance;
  }
  GameFlowState.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'GameFlowState',
    baseClasses: [imported$Enum]
  };
  function GameFlowState$values() {
    return [GameFlowState$DaySelection_getInstance(), GameFlowState$Ingame_getInstance(), GameFlowState$Feedback_getInstance(), GameFlowState$Pause_getInstance()];
  }
  GameFlowState.values = GameFlowState$values;
  function GameFlowState$valueOf(name) {
    switch (name) {
      case 'DaySelection':
        return GameFlowState$DaySelection_getInstance();
      case 'Ingame':
        return GameFlowState$Ingame_getInstance();
      case 'Feedback':
        return GameFlowState$Feedback_getInstance();
      case 'Pause':
        return GameFlowState$Pause_getInstance();
    }
  }
  GameFlowState.valueOf_61zpoe$ = GameFlowState$valueOf;
  function Game() {
    this.screenWidth = 620;
    this.screenHeight = 440;
    this.renderer = new PIXI.CanvasRenderer(this.screenWidth, this.screenHeight);
    this.scene = new PIXI.Container();
    this.controller = new MenuKeyboardController(window);
    this.flow = GameFlowState$DaySelection_getInstance();
    this.background = PIXI.BaseTexture.fromImage('images/background.png', false);
    this.windowTexture = PIXI.BaseTexture.fromImage('images/window.png', false);
    this.gameSize = new Point(this.screenWidth, this.screenHeight);
    var tmp$0;
    (tmp$0 = document.getElementById('game')) != null ? tmp$0.appendChild(this.renderer.view) : null;
    window.requestAnimationFrame(Game_init$lambda(this));
    var b = new PIXI.Sprite(new PIXI.Texture(this.background, new PIXI.Rectangle(0, 0, this.screenWidth, this.screenHeight)));
    this.scene.addChild(b);
    this.gameStage = new MainMenuStage(this.gameSize, this.windowTexture);
    this.scene.addChild(this.gameStage.root);
  }
  Game.prototype.switchStage_lijjzo$ = function (newStage) {
    this.scene.removeChild(this.gameStage.root);
    this.scene.addChild(newStage.root);
    this.gameStage = newStage;
  };
  function Game$update$lambda(this$Game) {
    return function (it) {
      this$Game.update();
    };
  }
  Game.prototype.update = function () {
    var tmp$0, tmp$1, tmp$2;
    this.gameStage.handleController_riqvk4$(this.controller);
    this.gameStage.update();
    var stage = this.gameStage;
    tmp$0 = this.flow;
    if (Kotlin.equals(tmp$0, GameFlowState$DaySelection_getInstance())) {
      if (Kotlin.isType(stage, MainMenuStage) && stage.isReady) {
        var items = stage.selectedOption + 1;
        this.switchStage_lijjzo$(new IngameStage(this.gameSize, items, this.windowTexture));
        this.flow = GameFlowState$Ingame_getInstance();
        this.controller = new KeyboardController(window);
      }
    }
     else if (Kotlin.equals(tmp$0, GameFlowState$Ingame_getInstance())) {
      var done = (tmp$2 = Kotlin.isType(tmp$1 = this.gameStage, IngameStage) ? tmp$1 : null) != null ? tmp$2.done : null;
      if (Kotlin.isType(stage, IngameStage)) {
        if (done != null) {
          this.switchStage_lijjzo$(new FeedbackStage(this.gameSize, this.windowTexture, stage.itemsPerCharacter, done));
          this.flow = GameFlowState$Feedback_getInstance();
          this.controller = new MenuKeyboardController(window);
        }
         else if (stage.needsPause) {
          this.switchStage_lijjzo$(new PauseStage(this.gameSize, this.windowTexture, stage.level));
          this.flow = GameFlowState$Pause_getInstance();
          this.controller = new MenuKeyboardController(window);
        }
      }
    }
     else if (Kotlin.equals(tmp$0, GameFlowState$Pause_getInstance())) {
      if (Kotlin.isType(stage, PauseStage) && stage.isReady) {
        if (stage.selectedOption === 0) {
          this.switchStage_lijjzo$(new IngameStage(this.gameSize, stage.pausedLevel.itemsPerCharacter, this.windowTexture, stage.pausedLevel));
          this.flow = GameFlowState$Ingame_getInstance();
          this.controller = new KeyboardController(window);
        }
         else {
          this.switchStage_lijjzo$(new MainMenuStage(this.gameSize, this.windowTexture));
          this.flow = GameFlowState$DaySelection_getInstance();
        }
      }
    }
     else if (Kotlin.equals(tmp$0, GameFlowState$Feedback_getInstance()))
      if (Kotlin.isType(stage, FeedbackStage) && stage.isReady) {
        if (stage.selectedOption === 0) {
          var items_0 = stage.day;
          this.switchStage_lijjzo$(new IngameStage(this.gameSize, items_0, this.windowTexture));
          this.flow = GameFlowState$Ingame_getInstance();
          this.controller = new KeyboardController(window);
        }
         else {
          this.switchStage_lijjzo$(new MainMenuStage(this.gameSize, this.windowTexture));
          this.flow = GameFlowState$DaySelection_getInstance();
        }
      }
    this.renderer.render(this.scene);
    window.requestAnimationFrame(Game$update$lambda(this));
  };
  function Game_init$lambda(this$Game) {
    return function (it) {
      this$Game.update();
    };
  }
  Game.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Game',
    baseClasses: []
  };
  function main$lambda(it) {
    return new Game();
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function TextStyle(fill, wordWrap, wordWrapWidth, font, align) {
    if (fill === void 0)
      fill = 'black';
    if (wordWrap === void 0)
      wordWrap = false;
    if (wordWrapWidth === void 0)
      wordWrapWidth = 100;
    if (font === void 0)
      font = null;
    if (align === void 0)
      align = null;
    this.fill = fill;
    this.wordWrap = wordWrap;
    this.wordWrapWidth = wordWrapWidth;
    this.font = font;
    this.align = align;
  }
  TextStyle.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TextStyle',
    baseClasses: []
  };
  TextStyle.prototype.component1 = function () {
    return this.fill;
  };
  TextStyle.prototype.component2 = function () {
    return this.wordWrap;
  };
  TextStyle.prototype.component3 = function () {
    return this.wordWrapWidth;
  };
  TextStyle.prototype.component4 = function () {
    return this.font;
  };
  TextStyle.prototype.component5 = function () {
    return this.align;
  };
  TextStyle.prototype.copy_fvsu47$ = function (fill, wordWrap, wordWrapWidth, font, align) {
    return new TextStyle(fill === void 0 ? this.fill : fill, wordWrap === void 0 ? this.wordWrap : wordWrap, wordWrapWidth === void 0 ? this.wordWrapWidth : wordWrapWidth, font === void 0 ? this.font : font, align === void 0 ? this.align : align);
  };
  TextStyle.prototype.toString = function () {
    return 'TextStyle(fill=' + Kotlin.toString(this.fill) + (', wordWrap=' + Kotlin.toString(this.wordWrap)) + (', wordWrapWidth=' + Kotlin.toString(this.wordWrapWidth)) + (', font=' + Kotlin.toString(this.font)) + (', align=' + Kotlin.toString(this.align)) + ')';
  };
  TextStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fill) | 0;
    result = result * 31 + Kotlin.hashCode(this.wordWrap) | 0;
    result = result * 31 + Kotlin.hashCode(this.wordWrapWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.align) | 0;
    return result;
  };
  TextStyle.prototype.equals_za3rmp$ = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fill, other.fill) && Kotlin.equals(this.wordWrap, other.wordWrap) && Kotlin.equals(this.wordWrapWidth, other.wordWrapWidth) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.align, other.align)))));
  };
  function slice($receiver, sizes) {
    var tmp$2, tmp$5;
    var result = imported$arrayListOf([]);
    var x = 0;
    var y = 0;
    for (tmp$2 = 0; tmp$2 !== sizes.length; ++tmp$2) {
      var height = sizes[tmp$2];
      for (tmp$5 = 0; tmp$5 !== sizes.length; ++tmp$5) {
        var width = sizes[tmp$5];
        result.add_za3rmp$(new PIXI.Texture($receiver, new PIXI.Rectangle(x, y, width, height)));
        x += width;
      }
      y += height;
      x = 0;
    }
    return Kotlin.copyToArray(result);
  }
  function slice$lambda(closure$xFrames, this$slice, closure$frameSize) {
    return function (it) {
      var y = it / closure$xFrames | 0;
      var x = it - y * closure$xFrames;
      return new PIXI.Texture(this$slice, new PIXI.Rectangle(x * Kotlin.numberToInt(closure$frameSize.x), y * Kotlin.numberToInt(closure$frameSize.y), closure$frameSize.x, closure$frameSize.y));
    };
  }
  function slice_0($receiver, frameSize, xFrames, yFrames) {
    return Kotlin.arrayFromFun(xFrames * yFrames, slice$lambda(xFrames, $receiver, frameSize));
  }
  function plus($receiver, p) {
    return new PIXI.Point(Kotlin.numberToDouble($receiver.x) + Kotlin.numberToDouble(p.x), Kotlin.numberToDouble($receiver.y) + Kotlin.numberToDouble(p.y));
  }
  function KeyCodes() {
    KeyCodes_instance = this;
    this.Space = 32;
    this.Shift = 16;
    this.Backspace = 8;
    this.Enter = 13;
    this.Escape = 27;
    this.Left = 37;
    this.Up = 38;
    this.Right = 39;
    this.Down = 40;
    this.W = 87;
    this.A = 65;
    this.S = 83;
    this.D = 68;
    this.P = 80;
    this.R = 82;
    this.U = 85;
    this._1 = 49;
    this._2 = 50;
    this._3 = 51;
    this._4 = 52;
    this._5 = 53;
    this._6 = 54;
    this._7 = 55;
    this._8 = 56;
    this._9 = 57;
  }
  KeyCodes.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'KeyCodes',
    baseClasses: []
  };
  var KeyCodes_instance = null;
  function KeyCodes_getInstance() {
    if (KeyCodes_instance === null) {
      KeyCodes_instance = new KeyCodes();
    }
    return KeyCodes_instance;
  }
  function get_length($receiver) {
    return $receiver.endInclusive - $receiver.start;
  }
  function Event() {
    this.handlers_0 = Kotlin.kotlin.collections.emptyList();
  }
  Event.prototype.raise = function () {
    var tmp$0;
    tmp$0 = this.handlers_0.iterator();
    while (tmp$0.hasNext()) {
      var handler = tmp$0.next();
      handler();
    }
  };
  Event.prototype.plusAssign_qshda6$ = function (handler) {
    this.handlers_0 = imported$plus(this.handlers_0, handler);
  };
  Event.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Event',
    baseClasses: []
  };
  IngameStage.prototype.section_ss1lv0$ = GameStage.prototype.section_ss1lv0$;
  MenuStage.prototype.section_ss1lv0$ = GameStage.prototype.section_ss1lv0$;
  Object.defineProperty(ControllerAction, 'Up', {
    get: ControllerAction$Up_getInstance
  });
  Object.defineProperty(ControllerAction, 'Left', {
    get: ControllerAction$Left_getInstance
  });
  Object.defineProperty(ControllerAction, 'Right', {
    get: ControllerAction$Right_getInstance
  });
  Object.defineProperty(ControllerAction, 'Down', {
    get: ControllerAction$Down_getInstance
  });
  Object.defineProperty(ControllerAction, 'Select', {
    get: ControllerAction$Select_getInstance
  });
  Object.defineProperty(ControllerAction, 'Submit', {
    get: ControllerAction$Submit_getInstance
  });
  Object.defineProperty(ControllerAction, '_1', {
    get: ControllerAction$_1_getInstance
  });
  Object.defineProperty(ControllerAction, '_2', {
    get: ControllerAction$_2_getInstance
  });
  Object.defineProperty(ControllerAction, '_3', {
    get: ControllerAction$_3_getInstance
  });
  Object.defineProperty(ControllerAction, '_4', {
    get: ControllerAction$_4_getInstance
  });
  Object.defineProperty(ControllerAction, '_5', {
    get: ControllerAction$_5_getInstance
  });
  Object.defineProperty(ControllerAction, '_6', {
    get: ControllerAction$_6_getInstance
  });
  Object.defineProperty(ControllerAction, '_7', {
    get: ControllerAction$_7_getInstance
  });
  Object.defineProperty(ControllerAction, '_8', {
    get: ControllerAction$_8_getInstance
  });
  Object.defineProperty(ControllerAction, '_9', {
    get: ControllerAction$_9_getInstance
  });
  _.ControllerAction = ControllerAction;
  _.Controller = Controller;
  _.KeyboardControllerBase = KeyboardControllerBase;
  _.KeyboardController = KeyboardController;
  _.MenuKeyboardController = MenuKeyboardController;
  Object.defineProperty(Dialog, 'Companion', {
    get: Dialog$Companion_getInstance
  });
  _.Dialog_init_6f0voo$ = Dialog_init;
  _.Dialog = Dialog;
  _.GameStage = GameStage;
  _.IngameStage = IngameStage;
  _.MenuStage = MenuStage;
  Object.defineProperty(MainMenuStage, 'Companion', {
    get: MainMenuStage$Companion_getInstance
  });
  _.MainMenuStage = MainMenuStage;
  _.FeedbackStage = FeedbackStage;
  _.PauseStage = PauseStage;
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
  _.Point = Point;
  Object.defineProperty(Direction, 'None', {
    get: Direction$None_getInstance
  });
  Object.defineProperty(Direction, 'Up', {
    get: Direction$Up_getInstance
  });
  Object.defineProperty(Direction, 'Left', {
    get: Direction$Left_getInstance
  });
  Object.defineProperty(Direction, 'Down', {
    get: Direction$Down_getInstance
  });
  Object.defineProperty(Direction, 'Right', {
    get: Direction$Right_getInstance
  });
  _.Direction = Direction;
  Object.defineProperty(Vector, 'Companion', {
    get: Vector$Companion_getInstance
  });
  _.Vector = Vector;
  _.clamp_n6qkdc$ = clamp;
  _.clamp_vc2q8a$ = clamp_0;
  Task.Wait = Task$Wait;
  Task.Move = Task$Move;
  _.Task = Task;
  LevelState.AwaitVisitor = LevelState$AwaitVisitor;
  LevelState.ManageItems = LevelState$ManageItems;
  LevelState.AwaitFailure = LevelState$AwaitFailure;
  LevelState.CheckPause = LevelState$CheckPause;
  _.LevelState = LevelState;
  Object.defineProperty(_, 'allItems', {
    get: function () {
      return allItems;
    }
  });
  Object.defineProperty(_, 'colors', {
    get: function () {
      return colors;
    }
  });
  Object.defineProperty(Level, 'Companion', {
    get: Level$Companion_getInstance
  });
  _.Level = Level;
  Object.defineProperty(_, 'LevelResources', {
    get: LevelResources_getInstance
  });
  _.CharacterAnimation = CharacterAnimation;
  Schedule.Entry = Schedule$Entry;
  _.Schedule = Schedule;
  _.permute_2k50fz$ = permute;
  _.GameItem = GameItem;
  _.Location = Location;
  _.Character = Character;
  _.Item = Item;
  Object.defineProperty(GameFlowState, 'DaySelection', {
    get: GameFlowState$DaySelection_getInstance
  });
  Object.defineProperty(GameFlowState, 'Ingame', {
    get: GameFlowState$Ingame_getInstance
  });
  Object.defineProperty(GameFlowState, 'Feedback', {
    get: GameFlowState$Feedback_getInstance
  });
  Object.defineProperty(GameFlowState, 'Pause', {
    get: GameFlowState$Pause_getInstance
  });
  _.GameFlowState = GameFlowState;
  _.Game = Game;
  _.main_kand9s$ = main;
  _.TextStyle = TextStyle;
  _.slice_7w3woh$ = slice;
  _.slice_t1o5l8$ = slice_0;
  _.plus_f0z2s2$ = plus;
  Object.defineProperty(_, 'KeyCodes', {
    get: KeyCodes_getInstance
  });
  _.get_length_p6y9k$ = get_length;
  _.Event = Event;
  function Dialog_init(externalContainer, size, texture, $this) {
    $this = $this || Object.create(Dialog.prototype);
    Dialog.call($this, externalContainer, Kotlin.numberToInt(size.width), Kotlin.numberToInt(size.height), texture);
    $this.position = new PIXI.Point(size.x, size.y);
    return $this;
  }
  allItems = imported$listOf([new Item(new Point(50, 35), 'Wallet'), new Item(new Point(50, 40), 'Flashlight'), new Item(new Point(50, 60), 'Kettle'), new Item(new Point(50, 50), 'Clock'), new Item(new Point(50, 45), 'Book'), new Item(new Point(50, 35), 'Pencil'), new Item(new Point(50, 60), 'Ball'), new Item(new Point(50, 50), 'Hat'), new Item(new Point(50, 80), 'Panda')]);
  colors = imported$listOf([16777215, 255, 16711935, 16776960, 65535, 11184810, 8930474, 11176004, 4500104]);
  Kotlin.defineModule('LD37', _);
  main([]);
  return _;
}(typeof LD37 === 'undefined' ? {} : LD37, kotlin);
