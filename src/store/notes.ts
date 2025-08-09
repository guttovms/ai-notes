import { defineStore } from 'pinia';
import { http } from '../api/http';

export const useNotes = defineStore('notes', {
  state: () => ({ notes: [] as any[], q: '', loading: false }),
  actions: {
    async fetch() { this.loading = true; try {
      const { data } = await http.get('/notes', { params: { q: this.q || undefined }});
      this.notes = data.notes;
    } finally { this.loading = false; } },
    async create(payload:any){ const { data } = await http.post('/notes', payload); this.notes.unshift(data.note); },
    async update(id:string, payload:any){ const { data } = await http.put(`/notes/${id}`, payload);
      const i = this.notes.findIndex(n=>n._id===id); if(i>-1) this.notes[i]=data.note; },
    async remove(id:string){ await http.delete(`/notes/${id}`); this.notes = this.notes.filter(n=>n._id!==id); },
    async summarize(content:string){ const { data } = await http.post('/ai/summarize', { content }); return data; }
  }
});
