<script>
import { store } from '../js/store';

export default {
    data() {
        return {
            store,
            inputActive: false
        }
    },
    methods: {
        isActive() {
            this.inputActive = true;
        },
        isNotActive() {
            this.inputActive = false;
        }
    }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <div class="search-container">
            <font-awesome-icon id="icon" icon="fa-solid fa-magnifying-glass" />
            <input @focus="isActive" @focusout="isNotActive" :class="{active: this.inputActive}" type="text" v-model="store.inputField" @keyup.enter="store.search()">
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: var(--header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 0 30px;
}

input {
    outline: none;
    background: rgba(0,0,0,0.85);
    border: solid 1px rgba(255,255,255,0.85);
    padding: 7px 14px 7px 40px;
    width: 0%;
    font-size: 13px;
    color: white;
    opacity: 0;
    cursor: pointer;
    transition: ease width 1s, ease opacity 1s;
        &.active{
            opacity: 1;
            width: 100%;
            cursor: text;
            .icon {
                transform: translateX(-214px)
            }
        }
}

.search-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#icon {
    position: relative;
    left: 20px;
    z-index: 10;
    pointer-events: none;
}

</style>
