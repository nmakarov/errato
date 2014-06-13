test:
	./node_modules/.bin/mocha --reporter spec

test2:
	./node_modules/.bin/mocha --reporter nyan

.PHONY: test
