# I wanna merge two scripts(git, firebase push scripts)

git add .
git commit -m $1
git push

yarn build
firebase deploy -m $1