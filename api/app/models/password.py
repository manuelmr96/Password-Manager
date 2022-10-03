import numbers
from tokenize import Number
from typing import Optional
from pydantic import BaseModel

class PasswordCard(BaseModel):
    id: Optional[int] = None
    url: str
    name: str
    username: str
    password: str

    
class PasswordCardUpdater(BaseModel):
    id: Optional[int] = None
    url: Optional[str] = None
    name: Optional[str] = None
    username: Optional[str] = None
    password: Optional[str] = None