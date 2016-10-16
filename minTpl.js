//@name:minTpl
//@Author:郑哲明
//@github:https://github.com/andywang646691

;(function (window) {
	var minTpl = function (template) {
			this.parse(template).compile()
		}
	minTpl.fn = minTpl.prototype
	minTpl.fn.parse = function (tpl) {
			this.code = tpl.replace(/[\n\t]+?/g, '').replace(/{{[^#]+?}}/g, function (match) {
				return match.replace(/{{/, '"+').replace(/}}/, '+"')
			}).replace(/{{#[^]+?}}/g, function (match) {
				return match.replace(/{{#/, '";').replace(/}}$/, 'view += "')
			})
			this.code = 'var view = "' + this.code + '";return view'
			return this
		}
	minTpl.fn.compile = function () {
		this.template = new Function(this.code)
	}
	minTpl.fn.render = function (data) {
		return this.template.call(data)
	}

	window.minTpl = function (src) {
		return new minTpl(src)
	}
})(window)