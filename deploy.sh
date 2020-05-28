#! /bin/sh
yarn build \
& cd dist \
& git init \
& git add . \
& git commit -m"deploy" \
& git remote gitee add git@gitee.com:gankio/gankio.git \
& git push -u gitee master \
& git remote github add git@github.com:gankio/gankio.github.io.git \
& git push -u gitee master

