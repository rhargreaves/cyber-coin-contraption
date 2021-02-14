DOCKER_IMAGE=cyber-coin-contraption-buyer
DOCKER_RUN=docker run \
					 -e BUYER_CB_API_KEY \
					 -e BUYER_CB_API_SECRET \
					 -e BUYER_CB_PASSPHRASE \
					 -e BUYER_CB_SANDBOX_API_KEY \
					 -e BUYER_CB_SANDBOX_API_SECRET \
					 -e BUYER_CB_SANDBOX_PASSPHRASE \
					 -e BUYER_CB_USE_SANDBOX \
					 -e AWS_ACCESS_KEY_ID \
					 -e AWS_SECRET_ACCESS_KEY \
					 -t $(DOCKER_IMAGE)
AWS_PROFILE=cccb

all: test

build:
	docker build -t $(DOCKER_IMAGE) .
.PHONY: build

test: build
	$(DOCKER_RUN) \
		npm run test
.PHONY: test

run: test
	$(DOCKER_RUN) \
		npm run start
.PHONY: run

deploy:
	$(DOCKER_RUN) \
		node_modules/.bin/sls deploy
