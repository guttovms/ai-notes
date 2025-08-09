<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { createPinia } from 'pinia';
import { useNotes } from './store/notes';
const pinia = createPinia(); // no main.ts real, mas aqui simplificando

const store = useNotes(pinia);
const title = ref(''); const content = ref('');

onMounted(() => store.fetch());

async function addNote(){
  if(!title.value || !content.value) return;
  await store.create({ title: title.value, content: content.value });
  title.value=''; content.value='';
}
async function gen(n:any){
  const { summary, tags } = await store.summarize(n.content);
  await store.update(n._id, { content: `${n.content}\n\n---\nResumo: ${summary}`, tags });
}
</script>

<template>
  <main style="max-width:820px;margin:0 auto;padding:16px">
    <h1>AI Notes</h1>

    <div style="display:flex;gap:8px;margin:8px 0">
      <input v-model="store.q" placeholder="Buscar…" @keyup.enter="store.fetch" />
      <button @click="store.fetch">Buscar</button>
    </div>

    <div style="display:grid;gap:8px;margin:16px 0">
      <input v-model="title" placeholder="Título" />
      <textarea v-model="content" placeholder="Conteúdo"></textarea>
      <button @click="addNote">Salvar</button>
    </div>

    <ul style="display:grid;gap:12px">
      <li v-for="n in store.notes" :key="n._id" style="border:1px solid #333;padding:12px;border-radius:8px">
        <h3>{{ n.title }}</h3>
        <pre style="white-space:pre-wrap">{{ n.content }}</pre>
        <small>Tags: {{ (n.tags||[]).join(', ') || '—' }}</small>
        <div style="display:flex;gap:8px;margin-top:8px">
          <button @click="gen(n)">Gerar resumo</button>
          <button @click="store.remove(n._id)">Excluir</button>
        </div>
      </li>
    </ul>
  </main>
</template>
