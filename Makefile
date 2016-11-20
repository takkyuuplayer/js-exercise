.PHONY: test

all: setup upgrade

setup:
	yarn install

test:
	npm run test

upgrade:
	yarn outdated | awk 'NR>2{print $$0}' | tac | awk 'NR>1{print $$1}' | xargs yarn upgrade

lint:
	$(shell npm bin)/eslint test
