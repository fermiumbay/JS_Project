// ゲームオブジェクト

(function() {

	Game = function() {
		this.t = 0;
		this.endGameFlg = false;
	};

	Game.prototype.initialize = function() {
		// 初期化時の処理
	};

	Game.prototype.run = function() {
		// 実行中の処理
		this.t++;
		if(this.t >= 120) this.endGame();
	};

	Game.prototype.endGame = function() {
		this.endGameFlg = true;
	};

	Game.prototype.isEnded = function() {
		return this.endGameFlg;
	};

	Game.prototype.finalize = function() {
		// 終了時の処理
	};

})();

