
def populate_password_card(actual_password_card,changed_password_card):
    if changed_password_card.url != None:
        actual_password_card.url = changed_password_card.url
    if changed_password_card.name != None:
        actual_password_card.name = changed_password_card.name
    if changed_password_card.username != None:
        actual_password_card.username = changed_password_card.username
    if changed_password_card.password != None:
        actual_password_card.password = changed_password_card.password
    return actual_password_card