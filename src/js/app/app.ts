﻿console.log('Hello sea battle');
//точка входа.  и отсюда мы управляем приложением.

//сюда происходит импорт основных фабрик
function GameInit() {

    GameFactory.getGameOptions();//вызываем настройки игры перед началом
    new changeTheme();//вызываем управление темами
    new changeSize();//вызываем управление размером поля 
    new autoShipPosition();//вызываем автоматическое размещеение кораблей
    new manualShipPosition();//вызываем ручное расположение кораблей

    //показываем блок с настройками выбора режимов игры
    //скрываем блок с игровыми полями

    //отслеживаем нажатие на кнопку "в игру"
    //при нажатии на кнопку "в игру" получаем состояние радиобаттона "размер поля", 
    //"автоматическое или ручное размещение кораблей", темы оформления.
    //после сбора информации вызываем модуль GameStart

};
function GameStart() {

    GameFactory.getGame();//вызываем игровой блок по результатам собранной информации 
    new makeFields();//вызываем игровые поля
    new shipsConfig();//вызываем конфигурацию эскадры, сколько и каких кораблей 
    new autoShipPosition();//вызываем автоматическое размещеение кораблей
    new manualShipPosition();//вызываем ручное расположение кораблей
    new startSreen();//вызываем вывод сообщений о начале игры в инфопанель
    new gameInfoPanel();//вызываем вывод игровых сообщений в инфопанель
    new fieldEventListner();//вызываем отслеживание кликов по полю
    new opponent();//вызываем компьютерного оппонента
    

};