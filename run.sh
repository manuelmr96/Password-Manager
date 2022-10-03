if [ "$#" -lt "1" ]
then
    echo "Activate the Virtual Environment"
    source ./api/.venv/bin/activate
fi


echo "Starting the API and Client Applications in parallel"

cd api && uvicorn app.main:app --reload &
cd client && npm start

echo "All ready to work http://localhost:4200"