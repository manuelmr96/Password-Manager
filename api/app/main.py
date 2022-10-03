from pydoc import describe
from fastapi import FastAPI,  HTTPException, status
from app.utils import populate_password_card
from app.models.password import PasswordCard, PasswordCardUpdater

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
password_cards: list = []

@app.get("/password-cards")
def list_password_cards():
    return password_cards

@app.post("/password-cards" , status_code=status.HTTP_201_CREATED)
def create_password_card(password_card: PasswordCard):
    id = len(password_cards)
    password_card.id = id
    password_cards.append(password_card)
    return password_card

@app.get("/password-cards/filter")
def list_password_cards_search_name(name: str):
    password_cards_filtered = []
    for card in password_cards :
        if card.name.find(name) >= 0 :
            password_cards_filtered.append(card)
    return password_cards_filtered
    #password_cards_filtered = [card for card in password_cards if card['name'] in [name]] #filter(lambda card: card['name'].contains(name),password_cards)
    #return password_cards_filtered

@app.patch("/password-cards/{id}")
def update_password_card(id: int, password_card_update: PasswordCardUpdater):
    if id >= len(password_cards):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Password Card does not exist")
    password_cards[id] = populate_password_card(password_cards[id],password_card_update)
    return password_cards[id]

@app.delete("/password-cards/{id}", status_code=status.HTTP_202_ACCEPTED)
def delete_password_card(id: int):
    if id >= len(password_cards):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Password Card does not exist")
    password_cards.remove(password_cards[id])