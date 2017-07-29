describe('Oi', function(){
	var hello;

	beforeEach(function(){
		hello = new Hello();
	});

	it('diga meu nome corretamente', function(){
		expect(hello.sayHi('João')).toEqual('Meu nome é João e eu estou aprendendo Grunt!');
	});
});