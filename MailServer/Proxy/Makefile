platform = $(shell uname)
program ::=

ifeq ( $(platform), Lunux )
	export program=build.sh
else
	export program=build.cmd
endif

deploy:
	build.cmd deploy proxy mailproxy 

all: deploy


test:
	@echo $$program 