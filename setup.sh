echo "Creating the Virtual Environment for python 3"

python3 -m venv ./api/.venv

echo "Activating the new Virtual Environment"

source ./api/.venv/bin/activate

echo "Installing the dependencies for the API through pip"

pip install --no-cache-dir --upgrade -r ./api/requirements.txt


echo "Installing dependencies for the Client applications"

cd ./client && npm i && cd ../

while getopts r: param
do
    case "${param}" in
        r) run=${OPTARG};;
    esac
done

if [ $run ]
then
  sh ./run.sh venv
fi

