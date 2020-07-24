<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <title>Personagem</title>
        <link type="text/css" rel="stylesheet" href="Style/character.css">
        <script src="Script/funcoesAuxiliares.js"></script>
        <script src="Script/trilhas.js"></script>
        <script src="Script/ancestralidades.js"></script>
        <script src="Script/character.js"></script>
    </head>
    <body>
        <div id="mainDiv">
            <div id="profile">
                <div id="photoHolder">
                    <div id="photo">
                        <p id="addImage">+</p>
                    </div>
                </div>
                <div id="text">
                    <p id="name"></p>
                    <p>Nível: <span id="level"></span><button id="addLevel" onclick="addLevel()">+</button></p>
                    <p id="ancestry"></p>
                    <p id="novicePath"></p>
                    <p id="expertPath"></p>
                    <p id="masterPath"></p>
                </div>
            </div>
            <div id="mostImportantCharacteristics">
                <div id="insanityDiv">
                    <p>Insanidade</p>
                    <input id="insanity" type="text">
                </div>
                <div id="corruptionDiv">
                    <p>Corrupção</p>
                    <input id="corruption" type="text">
                </div>
                <div id="powerDiv">
                    <p>Poder</p>
                    <input id="power" type="text">
                </div>
                <div id="defenseDiv">
                    <p>Defesa</p>
                    <input id="defense" type="text">
                </div>
                <div id="damageDiv">
                    <p>Dano</p>
                    <input id="damage" type="text">
                </div>
                <div id="healingRateDiv">
                    <p>Taxa de Cura</p>
                    <input id="healingRate" type="text">
                </div>
            </div>
            <div id="extras">
                <button onclick="loadInfo()">Informações Gerais</button>
                <div id="info"></div>
                <button onclick="loadTalents()">Talentos</button>
                <div id="talents"></div>
                <button onclick="loadEquipment()">Equipamentos</button>
                <div id="equipments"></div>
                <button onclick="loadSpells()">Magias</button>
                <div id="spells"></div>
            </div>
            <div id="otherCharacteristics">
                <p id="strength">Força: </p>
                <p id="agility">Agilidade: </p>
                <p id="intellect">Intelecto: </p>
                <p id="will">Vontade: </p>
                <p id="perception">Percepção: </p>
                <p id="size">Tamanho: </p>
                <p id="speed">Deslocamento: </p>
                <p id="health">Saúde: </p>
            </div>
        </div>
        <script>loadCharacterData()</script>
    </body>
</html>
