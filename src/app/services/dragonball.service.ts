import { Character } from './../interfaces/character.interface';
import { effect, Injectable, signal } from '@angular/core';

const loadFromLocalStorage = ():Character[] => {
    const characters = localStorage.getItem('characters') 
    return characters ? JSON.parse(characters) : []

    return []
}

@Injectable({providedIn: 'root'})
export class DragonballService {

    characters = signal<Character[]> (loadFromLocalStorage());
      
    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()))
    })

    addCharacter(character: Character){
        this.characters.update (
            list => [...list, character]
    )
    }

}