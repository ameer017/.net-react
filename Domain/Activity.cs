using System;

namespace Domain;

public class Activity
{
    // Basic Properties
    public string Id { get; set; } = Guid.NewGuid().ToString(); // DB creates the ID via GUID and strings are easier to work with hence we set it as our data type.
    public required string Title { get; set; }
    public DateTime Date { get; set; }
    public required string Description { get; set; }
    public required string Category { get; set; }

    public bool IsCancelled { get; set; }


    // Location properties

    public required string City { get; set; }
    public required string Venue { get; set; }

    public double Latitude { get; set; }
    public double Longitude { get; set; }

}
