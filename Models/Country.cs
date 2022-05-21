using System;

namespace CountryCuisine.Models
{
    public class Country
    {
        public int Id { get; set; }
        public DateTime DateAdded { get; set; } = DateTime.Now;
        public string Name { get; set; }
        public string PhotoUrl { get; set; }
        public string FlagUrl { get; set; }
    }
}